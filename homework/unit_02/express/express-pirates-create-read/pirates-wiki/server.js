// your code here
/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
const bodyParser = require('body-parser');

/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;

var pirateController = require('./controllers/pirates.js');

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());




app.set('view engine', 'hbs');



app.get('/', function(req,res) {
  res.send('This is our Home Page');
});
app.use('/pirates', pirateController);

// Start server
app.listen(port, function() {
  console.info('Server Ready.. ', port,"//", new Date());
});
