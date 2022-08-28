const userDetails = require("../models/userdetails")
const jwt = require("jsonwebtoken");
const { findById, findByIdAndUpdate, findOneAndUpdate } = require("../models/userdetails");
//const userdetails = require("../models/userdetails");


const usercreate  = async function(req,res){
   let data = req.body
   let savedData = await userDetails.create(data)
   res.send({msg:savedData})
}


const userlogin = async function(req,res){
    let userName = req.body.emailId
    let password = req.body.password

    let user = await userDetails.findOne({emailId:userName,password:password})
    if (!user)
    return res.send({status:false,msg:"emailand passwod not corect"})


    let token = jwt.sign({
        userId:user._id.toString(),
        batchName:"plutonium",
        organagition:"funcctionup"
    },"function-plutoninum-very-very-short-key");

    res.setHeader("x-auth-token",token);
    res.send({status:true,token:token})
}

const getUserData = async function(req,res){
    let token = req.headers["x-auth-token"];
    // if(!token) token = req.headers["x--auth-token"]

    // if(!token)
    // return res.send({status:false,msg:"no token in header"})
    console.log(token)
    if(!token)
    return res.send({status:false,msg:"token must be valid"})
    let decodedToken = await jwt.verify(token,'function-plutoninum-very-very-short-key')
    if(!decodedToken)
    return res.send({status:false,msg:"token is invalid"})
    let userId = req.params.userId
    let userdetail = await userDetails.findById(userId)
    if(!userdetail) 
    return res.send({status:false,msg:"no such userid"})
    res.send({status:true, data:userdetail})
}

let updatedUser = async function(req,res){
    let userId = req.params.userId
    let user = await findById(userId)
    if (!user)
    return res.send({msg:"no such user"})

    let userData = req.body
    let updatedUser = await userDetails.findOneAndUpdate({id:userId},userData)
    res.send({status:updatedUser,data:updatedUser})

}
module.exports.updatedUser=updatedUser
module.exports.getUserData =getUserData



module.exports.userlogin=userlogin
module.exports.usercreate= usercreate

