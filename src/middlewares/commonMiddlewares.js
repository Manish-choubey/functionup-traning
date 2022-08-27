
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// // const mid= function ( req, res, next) {
// //          if(isfreeAppuser){
// //             req.body
// //          }
// //          else
// //          res.send("error")
// //         }



//         // module.exports.mid=mid
// // module.exports.mid3= mid3
const mid = function(req,res,next){
    const data =req.headers.isfreeappuser
    if(!data){
        return res.send({msg:"error"})
    }
     req.body["isfreeappuser"] = data
     next()
    }


const mid2 = function(req,res,next){
  const data = req.headers.isfreeappuser
 if(!data){
    return res.send({msg:"error"})
 }
 req.body["isfeeappuser"] = data

 next()
 let userId= req.body
 let productId=req.body

  if(!userId)
    return res.send({msg:"error"})
 
  if(!productId)
    res.send({msg:"error"})
 
}














        
 module.exports.mid2=mid2
module.exports.mid=mid
