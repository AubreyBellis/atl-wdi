//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

//create your donut schema:
var donutSchema = new Schema({
    name: "Chocolate Donut",
    description: "I am a chocolate donut.",
    img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
    price: 5,
    qty: 99
});


// var UserModel = mongoose.model("User", UserSchema);
// var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {};