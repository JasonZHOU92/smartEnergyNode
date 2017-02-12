//Use the sample from https://github.com/extrabacon/python-shell
var http = require('http');
var PythonShell = require('python-shell');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  
//FIXME How to pass result from python to node.js 
  PythonShell.run('predict.py', function (err, results) {
     if (err) throw err;
     console.log('finished');
  });

  
  res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>'+'results=[103.24848921]'+'</h1>\n'  
    );
  res.end();
}).listen(8879, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8879');
