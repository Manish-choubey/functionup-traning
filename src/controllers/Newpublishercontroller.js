const Newpublisher = require("../models/Newpublisher.js")
//const Newauthormodel= require("../models/Newpublisher.js")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await Newpublisher.create(publisher)
    res.send({data: publisherCreated})
}



module.exports.createPublisher = createPublisher
