
const mongoose = require('mongoose');



const Bookchema = new mongoose.Schema({
    bookName: String,
    Author_id: Number,
    price: Number,
    rating: Number

},{ timestamps: true });



module.exports = mongoose.model('Book', Bookchema)
