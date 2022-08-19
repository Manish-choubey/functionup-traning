const mongoose = require('mongoose');

const NewpublisherSchema = new mongoose.Schema( {
   name:String,
   headquater:String

}, { timestamps: true });

module.exports = mongoose.model('Newpublisher',NewpublisherSchema )
