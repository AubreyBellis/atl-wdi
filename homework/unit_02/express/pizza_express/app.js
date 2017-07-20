//require express package
const express = require('express');
//save an express module as 'app'
const app = express();
// assigning 3000 as our port















const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log("server started on port " + port);
});