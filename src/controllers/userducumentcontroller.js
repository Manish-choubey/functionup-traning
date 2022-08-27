const userdocument = require("../models/userdocument")
const userducumentcontroller = ("../middleares/commonMiddeares")




const createdocument= async function (req, res) {
let data  = req.body


    let savedData= await userdocument.create(data)
    
    
    res.send({msg: savedData})
    
}









module.exports.createdocument=createdocument