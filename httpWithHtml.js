var http= require('http');
var fs= require('fs');

var promise= new Promise((resolve,reject)=> {
	fs.readFile('view/index.html', (err,html)=> {	
		if(err) {
			reject("Unable to read the file: "+err);
		} else {
			resolve(html);
		}
	});
});

promise.then((html)=>{
	var server= http.createServer((req,res) => {
		res.statusCode= 200;	
		//res.setHeader('Content-type','text/plain'); //displays html content also as text
		res.setHeader('Content-type','text/html');
		res.write(html);
		res.end();
	});

	server.listen('3000', 'localhost', (err) => {
		console.log('Server started listening on port 3000...');
	});
}).catch((message)=>{
	console.log(message);
});

