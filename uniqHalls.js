

var dvorane = require('./halls.js');

const lodash = require('lodash');

// LODASH SYNTAX
// _.fill(array, value, [start=0], [end=array.length])

const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("Hello world!");
}).listen(3000);
