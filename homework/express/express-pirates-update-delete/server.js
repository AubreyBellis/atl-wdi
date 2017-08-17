//===========================
// REQUIREMENTS
//===========================
const  express = require("express");
const  app = express();
const  logger = require("morgan");
const  bodyParser = require("body-parser");
const  hbs = require('hbs');
const methodOverride = require('method_override');

const port        = process.env.PORT || 3000;


// //===========================
// // MIDDLEWARE
// //===========================
// //this is for morgan
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// //these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//method override
app.use(methodOverride('_method'));
//CSS STYLE LINK
app.use(express.static(__dirname + '/public'));
// //set handlebars as view engine
app.set('views', './views');
app.set("view engine", "hbs");

// //===========================
// // CONTROLLERS
// //===========================

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);



//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);
