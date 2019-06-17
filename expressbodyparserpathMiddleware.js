var express= require('express');
var bodyParser= require('body-parser');
var path= require('path');

var app= express();

var logger= function(req,res,next) {
	console.log('Logging service...');
	next();
};

app.use(logger); //registering the middleware - that's how dependancy injection happens to the function

app.get('/',(req,res)=> {
	res.send('Hello from express!');
})

app.listen(3000, ()=>{
	console.log('Server listening on port 3000...');
})