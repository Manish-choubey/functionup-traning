//const Bookmodel2 = require("../models/Bookmodel2.js");
const bookmodel3 = require("../models/bookmodel3.js");
//const Bookmodel2 = require("../models/bookcreat.js");



const createBook1= async function (req, res) {
    let data= req.body

    let savedData= await bookmodel3.create(data)
    res.send({msg: savedData})
}



const getBooksData= async function (req, res) {
    let allBooks= await bookmodel3.find().select({ Author_Name: "chetan bhagat", author_id: 1})
    res.send({ msg: allBooks })

}


const updateBooks = async function (req,res){

    let bookprice = await Bookmodel2.findOneAndUpdate({name:"two state"},{$set :{price: 100}},{new : true})

    let updateprice = bookprice.price;

    let authorupdate = await bookmodel3.find({author_id: {$eq: bookprice.author_id}}).select({Author_Name:1,_id});

    res.send({authorupdate,updateprice});
}



const bookrange  = async function (req,res){

    let range = await bookmodel2.find({price: {$gte:50,$lte:100}});
    let a = range.map(x=>x.author_id);

    let newrange = await bookmodel3.find({author_id:a}).select({Author_Name:1,id:0});

    res.send({newrange})

}



module.exports.createBook1=createBook1


module.exports.getBooksData=getBooksData


module.exports.updateBooks=updateBooks

module.exports.bookrange= bookrange