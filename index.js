const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify({name: 'Kamran', age: 29}))
    res.end();
}).listen(3000)