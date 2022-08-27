const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"user"
        
    },
    productId:{
        type:ObjectId,
        ref:"product"
    },
    amount:0,
    isfreeappuser:Boolean,
    orderdate:Date
},{ timestamps: true })

module.exports = mongoose.model('productdetails',productSchema)