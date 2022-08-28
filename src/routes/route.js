const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userdetailscontroller = require("../controllers/userdetailscontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/usercreate", userdetailscontroller.usercreate)

//router.post("/login", userController.loginUser)
router.post("/login", userdetailscontroller.userlogin)

//The userId is sent by front end
router.get("/users/:userId", userdetailscontroller.getUserData)

router.put("/users/:userId", userdetailscontroller.updatedUser)

module.exports = router;