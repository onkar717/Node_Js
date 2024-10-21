const express = require('express')
const app = express()

const morgan = require('morgan') 

const mongoose = require('mongoose');
const Blog = require('./modles/blog');
const uri = "mongodb+srv://onkars:onkars@cluster0.krimphv.mongodb.net/rushi?retryWrites=true&w=majority";
mongoose.connect(uri , {useNewUrlParser: true,useUnifiedTopology: true})
.then((result) => app.listen(4000 , () => console.log("onki bhai")))
.catch((err) => console.log(err))

// Static files Using middleware 
app.use(express.static('Public'))
app.use(express.urlencoded({extended : true}))
app.use(morgan('dev'))



// Template View Engine 
app.set('view engine' , 'ejs')


// Home page (Index Page)
app.get('/' , (req , res) => {
    res.redirect('/blogs')
})

// About Page
app.get('/about' , (req , res) => {
    res.render('about', {title : 'About'})
})

//blog routes 
app.get('/blogs', (req , res ) => {
    Blog.find().sort({createdAt : -1})
    // Blog.find()
    .then((result) => {
        res.render('index' , {title : 'All Blogs' , blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
})

app.post('/blogs' , (req ,res) => {
    const blog = new Blog(req.body)

    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
    .catch((err) => {
        console.log(err)
    })
})

// New Blog Page
app.get('/blogs/create' , (req,res) => {
    res.render('create' , {title: 'Create a New Blog'})
})

app.get('/blogs/:id', (req ,res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details' , {blog: result , title: "Blog Details"})
    })
    .catch(err => {
        console.log(err);
    })
})

app.delete('/blogs/:id', (req , res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs' })
    })
    .catch((err) => {console.log(err)})
} )


// 404 Page
app.use((req,res) => {
    res.status('404').render('404' , {title : '404'})
})

// cs.temporary@icloud.com





