var express= require('express');
var bodyParser= require('body-parser');
var path= require('path');

var app= express();

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set path for static resources
//app.use(express.static(path.join(__dirname,'static'))); 	//static is the folder where we have placed static resources


var person = {'name':'Jeff', 'age':26};

app.get('/',(req,res)=> {
	res.json(person);		//to return a json object or json array to an application requesting any resource
})

app.listen(3000, ()=>{
	console.log('Server listening on port 3000...');
});