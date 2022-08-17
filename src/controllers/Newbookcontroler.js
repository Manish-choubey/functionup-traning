const Newbookmodel = require("../models/Newbookmodel.js")
//const BookModel= require("../models/Newbookmodel.js")






const createBook= async function (req, res) {
    let data= req.body

    let savedData= await Newbookmodel.create(data)
    res.send({msg: savedData})
}







const allBooksList = async function (req, res) {
  let list = await Newbookmodel.find().select({ bookName: 1, authorName: 1, _id: 0 })
  res.send({ msg: list })
}



const yearDetails = async function (req, res) {
  let yearList= await Newbookmodel.find({ year: req.body.year }).select({bookName:1,_id:0})
  res.send(yearList)
  }



  const particularBooks = async function (req, res) {
    let specificBooks = await Newbookmodel.find(req.body)
    res.send({msg:specificBooks})
    }
    

    const priceDetails= async function(req,res){
      let list = await Newbookmodel.find({"prices.indianPrice": {$in: ["100INR", "200INR","500 INR"]}}
      ).select({bookName:1,_id:0})
      res.send({ msg: list })
      }


      const randomBooks= async function(req, res) {
        let allBooks = await Newbookmodel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
        res.send({msg: allBooks })
        }
  




module.exports.createBook= createBook

 module.exports.allBooksList= allBooksList
module.exports.yearDetails= yearDetails
 module.exports.particularBooks= particularBooks
module.exports.priceDetails= priceDetails
 module.exports.randomBooks= randomBooks