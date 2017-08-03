var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/',(request,response)=>{

  User.find({})
  .then(()=>{
    response.send(users);
  })
  .catch();
})
// USER SHOW ROUTE

// USER CREATE ROUTE

// USER UPDATE ROUTE

// USER DESTROY

// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;
