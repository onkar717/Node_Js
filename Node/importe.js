// odules.exports 
// const a = require('./exportse')
// console.log(a);


// operating system 
// const os = require('os')
// console.log(os.platform(),os.homedir());

// File System 
// const fs = require('fs')

// reading the files 
// fs.readFile('./docs/onki.txt',(err,data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// Writing a file 
// fs.writeFile('./docs/onki.txt' , 'hello samrudhi', () => {
//     console.log("The File is Wrtten")
// })

// fs.writeFile('./docs/sam.txt' , 'hello onkar', () => {
//     console.log("The File is Wrtten")
// })

//Directories 
// if (!fs.existsSync('./assets')) {  
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("The Folder is created");
//     })
// } 
// else{
//     fs.rmdir('./assets' , (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("The Folder is Deleted");
//     })
// }

// Deleting the files 

// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("The File is Deleted");
//     })
// }


// Streams - 
// Types - 1] Read Streams 2] Write Streams 

const fs = require('fs')

const readStream = fs.createReadStream('./docs/love.txt')
const writeStream = fs.createWriteStream('./docs/life.txt')


// readStream.on('data',(chunk) => {
//     console.log("------New Chunk--------")
//     console.log(chunk.toString());
//     writeStream.write('\n New Chunk \n')
//     writeStream.write(chunk)
// })

//piping
readStream.pipe(writeStream);