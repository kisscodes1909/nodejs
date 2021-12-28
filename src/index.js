const http = require('http');
require("dotenv").config();
const port = process.env.PORT || 1234;
const student = require('./student');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if(req.url == '/') {
        res.write('This is Home Page');
        res.end();
    } else if (req.url == '/student') {
        res.write('This is Student Page');
        res.end(student.student.join());
    }
});

server.listen(port, () => {
    console.log(`Server is runging at ${port}`)
});

