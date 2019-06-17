var express= require('express');
var bodyParser= require('body-parser');
var path= require('path');

var app= express();

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine",'ejs');
app.set('views', path.join(__dirname, 'views'));

//set path for static resources
//app.use(express.static(path.join(__dirname,'static'))); 	//static is the folder where we have placed static resources


var person = {'name':'Jeff', 'age':26};
var contacts= [{"phone":"9985791841"},{"phone":"93423442322"}];

app.get('/',(req,res)=> {
	res.render('index', {
		'title': 'View from EJS',
		'user':'aditya',
		'contacts': contacts
	});		//to return a json object or json array to an application requesting any resource
});

app.post('/contact/add', (req,res) => {
	console.log('Saving new contact...'+req.body.contact);
	contacts.push({"phone": req.body.contact});
	app.redirect("/");
});

app.listen(3000, ()=>{
	console.log('Server listening on port 3000...');
});