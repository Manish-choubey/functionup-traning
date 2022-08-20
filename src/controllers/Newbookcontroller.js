const Newbookmodel = require("../models/Newbookmodel")
const Newauthormodel = require("../models/Newauthormodel")
const Newpublisher = require("../models/Newpublisher")



const createBook= async function (req, res) {
    let book = req.body
    const{author_id,publisher_id}=book
    if(!author_id){
        return res.send("aothor_id does not exist")
    }
    if(!publisher_id){
        return res.send("publisher_id does not exist")
    }

    let author_idvalid =await Newauthormodel.findById(author_id)
    if(!author_idvalid){
        return res.send("not a valid author_id")
    }

    let publisher_idvalid =await Newpublisher.findById(publisher_id)
    if(!publisher_idvalid){
        res.send("not a valid publisher_id")
    }
    let bookCreated = await Newbookmodel.create(book)
    
     res.send({data:bookCreated})
    

}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await Newbookmodel.find().populate()
    res.send({data: specificBook})

}



const newupdateapi = async function(req,res){
  let updatebook = await Newbookmodel.updateMany(
        {Name:"pengin"},
        {$set:{isdeleted:true}},
        {new:true}
    )
    res.send({data:updatebook})

}


let updatebook =async function(req,res){
    let allBooks= await Newbookmodel.updateMany(
        { rating: { $gt:  3.5 } },
        {$set:{price:10}}) 
    res.send({data:allBooks})
}






module.exports.getBooksWithAuthorDetails=getBooksWithAuthorDetails

module.exports.createBook=createBook
module.exports.newupdateapi=newupdateapi
module.exports.updatebook = updatebook