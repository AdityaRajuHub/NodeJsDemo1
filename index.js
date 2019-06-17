var http= require('http');

var server= http.createServer((req,res) => {
	console.log('Sending response...');
	res.write('Hello from nodejs !');
	res.end();
});

server.listen('3000', 'localhost', (err) => {
	console.log('Server started listening on port 3000...');
});