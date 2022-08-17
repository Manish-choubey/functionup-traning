const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    stockavailable:Boolean,
    totalpage: Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)