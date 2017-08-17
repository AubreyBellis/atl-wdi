// //your code below
// //requirements
// const express = require("express");
// const router = express.Router();
// const pirates = require('../models/pirates.js');

// //all routes for /pirate
// router.get('/', (req,res)=> {
//     res.render('pirates/index', {
//         pirates:req.body
//     });
// });


// router.get('/new', (req,res)=> {
//     res.render('pirates/new');
// });


// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     const pirate = data.seededPirates[id]

//     res.render('pirates/show', {
//         pirate: pirate
//     });
// });

// router.post('/', (req,res)=> {
//     const newPirate = {
//     };
//     data.seededPirates.push(newPirate);
// });


// //exports
// module.exports = router;