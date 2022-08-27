const productdetails = require("../models/productdetails")

const createdetails = async function (req,res){
    let data = req.body
    let savedData = await productdetails.create(data)
    res.send({msg:savedData})
}



module.exports.createdetails=createdetails