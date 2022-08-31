const jwt = require("jsonwebtoken");
const { findById } = require("../models/userModel");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
    
        let data = req.body;
        console.log(data)
        if (data) {
            let savedData = await userModel.create(data);
            res.status.send({ msg: savedData });
        }
      }

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
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
}


const getUserData = async function (req, res) {
  try{let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
}
catch(error){
  console.log("this is the error:",error.massage)
  res.send({msg:"error",error:error.massage})
}
};

const updateUser = async function (req, res) {


  try{let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.status(204).send("No such user exists");
  }

  let userData = req.body.firstName;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{firstName:userData}},{new:true});
  res.status(202).send({ status: updatedUser, data: updatedUser });
}
catch(error){
  console.log("this is the error:",error.massage)
  res.send({mag:"error",error:error.massage})
  
}
};

const postMessage = async function (req, res) {
    let message = req.body.message
    
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    let userToBeModified = req.params.userId
    
    let userLoggedIn = decodedToken.userId

    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}

const DeletedUser = async function(req,res){
  try{let userId = req.params.userId
  let user = await findById(userId)
  if(!user){
       return res.send ({status:false,msg:"no such id exist"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
  res.send({status:true,data:updatedUser})
}
catch(error){
  console.log("this is the error:",eroor.massage)
  console.log({msg:"error",error:error.massage})
}
}


module.exports.DeletedUser=DeletedUser

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
