// const fs = require('fs')
// const path = require('path');

// const dir_path = path.join(__dirname, 'crud')
// const file_path = `${dir_path}/data.txt`

/**
 * Understanding Asynchronous programming
 */

// console.log("Start execution...")

// setTimeout(() => {
//     console.log("Waiting...")
// }, 2000)

// console.log("End execution...")
/**
 * Handling asynchronous jobs
 */
let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    resolve(30)
})
waitingData.then((data) => {
    b = data;
    console.log(a+b)
})
/**
 * Add data to the file
 */

// fs.writeFileSync(file_path, "This is simple text data" )

/**
 * Read Data from the file
 */

// fs.readFile(file_path, 'utf-8', (err, item) => {
//     console.log(item)
// } )

/**
 * Update file
 */
// fs.appendFile(file_path, "This is the new updated data", err => {
//     if(!err) console.log("File updated...")
// })

/**
 * Rename the file
 */
// fs.rename(file_path, `${dir_path}/new.txt`, err => {
//     if(!err) console.log("File renamed successfully ...")
// })

/**
 * Delete the file
 */
// fs.unlinkSync(`${dir_path}/new.txt`)
// for (let index = 0; index < 5; index++) {
//     fs.writeFileSync(`${dir_path}/Hello${index}.text`, `This is a simple file ${index}`)
// }
// fs.readdir(dir_path, (err, files) => {
//     files.forEach((item) => {
//         console.log(item)
//     })
// })

// const http = require('http');
// const fileOps = require('./getting-input-from-cmdline')

// const input = process.argv;

// let command = input[2]
// let fileName = input[3]
// // createFile(input[2], input[3])
// if(command === 'add'){
//     let content = input[4]
//     fileOps.createFile(fileName, content)
// }else{

//     fileOps.removeFile(fileName)
// }


// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type':'application/json'});
//     res.write(JSON.stringify({name: 'Kamran', age: 29}))
//     res.end();
// }).listen(3000)