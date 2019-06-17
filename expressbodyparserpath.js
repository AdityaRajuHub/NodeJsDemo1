var express= require('express');
var bodyParser= require('body-parser');
var path= require('path');

var app= express();

app.get('/',(req,res)=> {
	res.send('Hello from express!');
})

app.listen(3000, ()=>{
	console.log('Server listening on port 3000...');
})