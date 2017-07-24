
//requirements
const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');
// //==============================
// // READ
// //==============================
// //for root pirate page
router.get('/', (req,res)=> {
    res.render('pirates/index', {
        pirates:req.body
    });
});

router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


// //this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


// //==============================
// // CREATE
// //==============================
router.get('/:id/edit', (req,res)=> {
  const id = req.params.id;
  const pirate = data.seededPirates[id];
  res.render('pirates/edit', {
    pirate: pirate,
    id: id
  })
});
// //==============================
// // UPDATE
// //==============================
router.put('/:id', (req,res)=> {
  //w have the ID
const id = req.params.id;
//Use the ID to grab specific index in array
const pirate = data.seededPirates[id];
//Update the description and urgent values
pirate.description = req.body.description;
pirate.urget = req.body.urgent;
//redirect backs to individual todo
res.method = 'GET';
res.redirect(`/pirates/${id}`);
});

//SAVE
router.post('/', (req,res)=> {
  console.log(req.body);

  const newPirate = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  data.seededPirates.push(newPirate);

  res.redirect("/pirates");
});
// //==============================
// // DESTROY
// //==============================
router.delete('/:id', function(req, res) {
    data.seededPirates.splice(req.params.id, 1); // remove the item from the array

    res.method="GET"
    res.redirect('/pirates');  // redirect back to the index route
});
// //==============================
// // EXPORTS
// //==============================

module.exports = router;
