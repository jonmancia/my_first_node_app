var http = require('http');
var fs = require('fs');
var port = 8080;

/*http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("My first node app");
}).listen(port); */

// http.createServer( function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   fs.readFile('index.html', function(err, content){
//     response.end(content);
//   })
// }).listen(port);

//Bullet proof our code
http.createServer( function(request, response) {
  fs.readFile('index.html', function(err, content){
    if(err){
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.end('failed');
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(content);
    }
  })
}).listen(port);
console.log("Console running on port " + port);
