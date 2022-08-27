const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")//
//const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const userducumentcontroller= require("../controllers/userducumentcontroller")

const productcontroller = require("../controllers/productcontroller")
const productdetailscontoller = require("../controllers/productdetailscontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




//router.post("/createBook", BookController.createBook  )

//router.post("/createdocument", userducumentcontroller.createdocument)




//router.post("/createUser", UserController.createUser)
// router.get("/getUsersData", UserController.getUsersData)


// const mid1= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid1")
//     // logic
//     let loggedIn = false

//     if (loggedIn== true) { 
//         console.log( "OK LOGGED IS IS TRUE NOW")




//         next ()
//     }
//     else {
//         res.send ("Please login or register")
//     }
// }


// const middile =  function(req,res,next){
//     let data = req.body
//     let isfreeAppuser = data
//     if(!isfreeAppuser){
//         return res.send('eror')
//         next()
//     }
// else{
//     res.send(data)
// }

// }
//productcontroller


router.post("/createdocument",commonMW.mid, userducumentcontroller.createdocument)

router.post("/createdetails",commonMW.mid2, productdetailscontoller.createdetails)

router.post("/createproduct",productcontroller.createproduct)


// // e.g. restricted and open-to-all API's can be handled like below now:
// router.get('/homePage', mid1, UserController.feeds)
// router.get('/profileDetails', mid1, UserController.profileDetails)
// router.get('/friendList', mid1, UserController.friendList)
// router.get('/changePassword', mid1, UserController.changePassword)

// router.get('/termsAndConditions',  UserController.termsAndConditions)
// router.get('/register',  UserController.register)





//router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;