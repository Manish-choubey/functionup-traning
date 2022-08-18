const { count } = require("console")
const Bookmodel2 = require("../models/Bookmodel2.js")
const BookModel= require("../models/Bookmodel2.js")



const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await Bookmodel2.create(data)
    res.send({msg: savedData})
}





module.exports.createAuthor= createAuthor