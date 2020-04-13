var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
    var url_parts = url.parse(req.url);
    var path = url_parts.pathname;
    fs.readFile(`${__dirname}${path}`, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write('Not Found')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data)
        }
        res.end();
    });
});

server.listen(3000);