//  setup express
var express= require('express');
var app= express();

//  setup template engine 
app.set('view engine','ejs');
app.use(express.static('./public'));

//  setup body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  setup server 
app.listen(3000);
console.log('You are listening to port: 3000');



//  required field
require('./models/db');

// import controller
var userRecordController= require('./controllers/userRecordsController');


// firing controller
app.use('/', userRecordController);
