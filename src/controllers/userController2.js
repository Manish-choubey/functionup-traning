const usermodel2 = require("../models/usermodel2")
const jwt = require("jsonwebtoken");





const userresiter = async function(req,res){
  try{
    let userdata = req.body
    if(!userdata)
    res.status(400).send({status:false, msg:"badrequest"})

    let savedata = await usermodel2.create(userdata)
    res.status(200).send(savedata)
  }
  catch(error){
console.log("this is the error:",error.massage)
res.send("eroor")
  }
}


const userlogin= async function(req,res){
let userName = req.body.Email
let Password = req.body.Password

let user = await usermodel2.findOne({Email:userName,Password:Password})
if(!user)
return res.send({status:false,msg:"username and password require"})


let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
   };
    

 const getuser = async function (req,res){
   let token = req.headers["x-auth-token"]
   
   if (!token)
   return res.send({status:false,msg:"token must be present in header"})
   console.log(token)


   let decodedToken =jwt.verify(token,"functionup-thorium")
   if(!decodedToken)
   return res.send({status:false,msg:"token is in invalid"})

   let userId =req.params.userId
   let userDetails = await usermodel2.findById(userId)
   if (!userDetails)
   return res.send({status:false,msg:"no such user exist"})

   res.send({status:true, data:userDetails})
 }


 const updateuser=async function(req,res){
  let token = req.headers["x-auth-token"]
  if(!token)
  return res.send({status:false,msg:"token is not present"})
  console.log(token)

  let decodedToken = jwt.verify(token,"functionup-thorium")
  if (!decodedToken)
  res.send({status:false,msg:"token is invalid"})

  let userId = req.params.userId
  let user = await usermodel2.findById(userId)
  if(!user)
  res.send({status:false,msg:"no such user"})

  let userdata = req.body
  let updatedUser = await usermodel2.findOneAndUpdate({_id:userId},userdata,{new:true})
  res.send({status:updatedUser,data:updatedUser})
 }


 const postMessage = async function(req,res){
  let massage = req.body.massage
  let token =req.headers["x-auth-token"]
  if(!token)
  res.send({status:false,msg:"token is invalid"})

  let decodedToken = jwt.verify(token,"functionup-thorium")
  if(!decodedToken)
  return res.send({status:false,msg:"no valid token"})

  let userToBeModified = req.params.userId
  let userLoggedIn = decodedToken.userId
  if(userToBeModified!=userLoggedIn)
  res.send({status:false,msg:"you are not authorise"})
  let user = await usermodel2.findById(req.params.userId)
  if(!user)
  return res.send({status:false,msg:"no such user"})
  let updatedPosts = user.post
  updatedPosts.push(massage)
  let updatedUser = await usermodel2.findOneAndUpdate({_id:user.id},{posts:updatedPosts},{new:true})
 }
















module.exports.updateuser=updateuser

module.exports.userresiter =userresiter 
 module.exports.userlogin=userlogin
 module.exports.getuser=getuser
 module.exports.postMessage=postMessage