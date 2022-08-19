const Newbookmodel = require("../models/Newbookmodel")
const Newauthormodel = require("../models/Newauthormodel")
const Newpublisher = require("../models/Newpublisher")



const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await Newbookmodel.create(book)

    if (bookCreated.length.author==="absent"){
        res.send({data: "error"})

    }else{
        res.send({data: bookCreated})

    }

    
    console.log(book)    

    

    
    

    



    // const getbyid = async function (req,res){
    //     let result = await Newbookmodel.find()
    //     if(author_id===)
    // }

      



    

    

}






module.exports.createBook=createBook