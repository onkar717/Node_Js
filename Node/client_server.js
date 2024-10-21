// const http = require('http')

// const server = http.createServer((req,res) => {
//     console.log("Request Mode");
// });

// server.listen(3000 ,"localhost", () => {
//     console.log('listening for request on port 3000');
// })


// / Request and response methods 

// #Requests
// const http = require('http')

// const server = http.createServer((req,res) => {
//     console.log(req.url , req.method);
// });

// server.listen(3000 ,"localhost", () => {
//     console.log('listening for request on port 3000');
// })


// #Responses
// const http = require('http')
// const server = http.createServer((req,res) => {
//     // console.log("Request Mode");
//     res.setHeader('Content-Type' , 'text/html')
//     res.write('<head><link rel="stylesheet" href="#"></head>')
//     res.write('Hello Ninja')
//     res.write('<h1> Hello again Ninja </h1>')
//     res.end();
// });

// server.listen(3000 ,"localhost", () => {
//     console.log('listening for request on port 3000')
// })



// Returning html pages 
// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     res.setHeader('Content-Type', 'text/html')
//     fs.readFile("./views/index.html", (err,data) => {
//         if (err) {0
//             console.log(err);
//             res.end()
//         }
//         else {
//             // res.write(data)
//             res.end(data)
//         }
//     });

// })
// server.listen(3000, "localhost", () => {
//     console.log('listening for request on port 3000')
// })


// Basic Routing 
// const http = require('http')
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     res.setHeader('Content-Type', 'text/html')

//     let path = './views/';
//     switch (req.url) {
//         case '/':
//             path += 'index.html'
//             res.statusCode = 200;// status code to show that all is ok
//             break;
//         case '/about':
//             path += 'about.html'
//             res.statusCode = 200;// status code to show that all is ok
//             break;
//          // redirecting the page    
//         case '/about-me':
//             res.statusCode = 301;// status code to show that all is ok
//             res.setHeader('Location' , '/about')
//             res.end()
//             break;
//         default:
//             path += '404.html'
//             res.statusCode = 404;// staus code to show an errror 404
//             break;
//     }

//     // send an html file 

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end()
//         }
//         else {
//             res.end(data)
//         }
//     })

// })

// server.listen(3000 ,"localhost" , () => {
//     console.log("Yes its Started");
// })



