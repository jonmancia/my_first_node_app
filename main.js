// var http = require('http');
// var port = 8080;


// http.createServer( function(request, response){
// 	response.writeHead(200, {'Content-type': 'text/plain'});
// 	response.end("yeya");
// }).listen(port);

// 	console.log("Server active on port " + port);
 	



var http = require('http');
var fs = require('fs');
var port = 8080;

var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();

logger.on('error', function(message){
	console.log('Error: ' + message);
});




http.createServer( function(request,response){
	fs.readFile('index.html', function(err, content){
		if(err){
			response.writeHead(500, {'Content-type': 'text/plain'});
			logger.emit('error', err)
			response.end('Error, 500');
		}
		else {
			var file = fs.createReadStream('text_file.txt');
			var newFile = fs.createWriteStream('text_file_copy.txt');
			file.pipe(newFile);
			response.writeHead(200, {'Content-type': 'text/html'});
			response.end(content)
		}
		
	})
}).listen(port);

	console.log("Listening on port "+ port);