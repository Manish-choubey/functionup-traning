const express = require('express');
const router = express.Router();
//const Newbookmodel= require("../models/Newbookmodel.js")
//const UserController= require("../controllers/userController")
const NewbookControler = require("../controllers/NewbookControler.js")
//const Newbookmodel= require("..models/Newbookmodel.js");

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", NewbookControler.createBook  )

 router.get("/allBooksList", NewbookControler.allBooksList)

 router.get("/yearDetails", NewbookControler.yearDetails)
 router.get("/particularBooks", NewbookControler.particularBooks)
  router.get("/priceDetails", NewbookControler.priceDetails)
  router.get("/randomBooks", NewbookControler.priceDetails)

module.exports = router;