var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (request, response) => {
    User.find({})
        .then((users) => {
            response.render(
                'donuts/index',
                { users }
            );
        })
        .catch((error) => {
            console.log('Error retrieving users from database!');
            console.log(error);
        });
})



//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
outer.get('/new', (request, response) => {
    response.render('donuts/new');
});


router.post('/', (request, response) => {

    const newDonutForm = request.body;

    // If the form body already contains everything you need for your user
    // you can just do this:
    User.create(newDonutForm)
        .then((user) => {
            response.render(
                'donuts/show',
                { donut }
            )
        })
        .catch((error) => {
            console.log('Error saving new user to database!');
            console.log(error);
        });


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
     
router.get('/:id', (request, response) => {
    const donutToSearchFor = request.params.id;

    User.findById(donutToSearchFor)
        .then((user) => {
            response.render(
                'donuts/show',
                { donut }
            );
        })
        .catch((error) => {
            console.log(`Error retrieving user with ID of ${donutToSearchFor}`);



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (request, response) => {

    const donutToUpdate = request.params.id;
    const updatedDonutInfo = request.body;

    User.findByIdAndUpdate(
        donutToUpdate,
        updatedDonutInfo,
        { new: true } // <-- DON'T FORGET THIS!!!
    )
        .then((user) => {
            console.log(`User with ID of ${donut._id} updated!`);

            response.render(
                'users/show',
                { user }
            )
        })
        .catch((error) => {
            console.log(`User with ID of ${donut._id} failed to update!`)
            console.log(error);
        })

});


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.get('/:id/delete', (request, response) => {

    const donutToDelete = request.params.id;

    User.findByIdAndRemove(donutToDelete)
        .then(() => {
            console.log(`Successfully deleted user with ID ${donutToDelete}!`)

            response.redirect('/donuts');
        })
});


//======================
// EXPORTS
//======================
var UserModel = mongoose.model("User", UserSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {
  User: UserModel,
  Item: ItemModel
};