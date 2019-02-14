var http = require('http');
var fs = require('fs');
var path = require('path');
/**
 * Simple Node.js Server
 * loads index.html from current folder
 * with styles and script files
 */
http.createServer(function (req, res) {
  
  var filePath = '.' + req.url;

  switch (filePath) {
    case './styles.css':
      fs.readFile('styles.css', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
      break;
    case './draw.js':
      fs.readFile('draw.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
      break;
    default:
      fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
      break;
  }

}).listen(8080);