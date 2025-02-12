const fs = require('fs');



const createFile = (fileName, data) => {
   
        fs.writeFileSync(fileName, data);
}

const removeFile = (fileName) => {
    fs.unlinkSync(fileName)
}

module.exports = {createFile, removeFile}