const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
    next()
}

const checkauthorise = function(req,res,next){
    let requestedUserId = req.params.userId
    if (requestedUserId!=loggedInuser)
    {
        res.send({status:false,msg:"permision denie"})
    }
    next()
}




module.exports.checkauthorise=checkauthorise
module.exports.validateToken=validateToken





















