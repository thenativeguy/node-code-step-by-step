const fs = require('fs')
const path = require('path');

const dir_path = path.join(__dirname, 'files')

// for (let index = 0; index < 5; index++) {
//     fs.writeFileSync(`${dir_path}/Hello${index}.text`, `This is a simple file ${index}`)
// }
fs.readdir(dir_path, (err, files) => {
    files.forEach((item) => {
        console.log(item)
    })
})

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