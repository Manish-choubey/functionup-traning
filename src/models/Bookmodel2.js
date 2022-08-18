const mongoose = require('mongoose');


const Authorchema = new mongoose.Schema({
    Author_id: Number,
    Author_Name: String,
    age: Number,
    Address: String

},{ timestamps: true });


module.exports = mongoose.model('Book', Authorchema)




