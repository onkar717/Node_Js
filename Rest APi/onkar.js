require('dotenv').config() // exports the url is present in .env 
// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")


// mongoose.connect('mongodb://localhost/rest' , {useNewUrlParser:true})
// const db = mongoose.connection
// db.on('error' ,(error) => console.error(error))
// db.once('open' ,() => console.log("connected to db"))
// app.listen(3000 , () => {console.log("server is stated")})

// const Uri = process.env.DATABASE_URL;

// mongoose.connect(Uri)
// .then((result) => {
//   app.listen(3000 , console.log("Hello World"))
// })
// .catch((err) => {console.log(err)})


const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json())

const subscribersRouter = require('./subscribers')
app.use('/subscribers' , subscribersRouter)

app.listen(3000 , () => {console.log("Server has started")})


// Require the subscriber routes
// const subscriberRoutes = require('./subscribers.js');

// // Use the subscriber routes
// app.use('/subscribers', subscriberRoutes);