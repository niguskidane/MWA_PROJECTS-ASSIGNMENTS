const http = require('http');
const fs = require('fs');
let count = 0;

const server = http.createServer((req, res) => {
    count++;
    console.log('request: ', count);
    res.writeHead(200,{});
    const data=fs.readFileSync(__dirname+'/test.MOV');
    res.end(data);
});

server.on('error', err => {
    console.log(err);
});

server.listen(4000, 'localhost', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server started: 4000');
    }
});
