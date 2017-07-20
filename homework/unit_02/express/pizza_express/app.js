//require express package
const express = require('express');
//save an express module as 'app'
const app = express();
// assigning 3000 as our port
const hbs = require('hbs');

app.set("view engine", "hbs");

app.get('/', (req,res) => {
     res.send('Welcome to Aubreys Pizza Express');
 });

    app.get(`/topping/:type`, (req, res,next) => {

    res.send(`{{data}} + "Great Choice"`);
});











const port = process.env.PORT || 3000;

app.listen (3000, () => {
    console.log("server started on port " + port);
});