const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

//const bookController2= require("../controllers/bookController2")
const bookcontroller3= require("../controllers/bookcontroller3.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor",bookcontroller2.createAuthor  )

 

 router.post("/createBook1", bookcontroller3.createBook1  )



router.get("/getBooksData", bookcontroller3.getBooksData)

//router.post("/updateBooks", bookcontroller3.updateBooks)
 //router.post("/bookrange", bookcontroller3.bookrange)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    // const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    // const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    // let x= dateB.diff(dateA, "days")
    // console.log(x)

    // res.send({ msg: "all good"})


module.exports = router;