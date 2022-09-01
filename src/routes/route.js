const express = require('express');
const router = express.Router();
//const userController= require("../controllers/userController")
const userController2= require("../controllers/userController2");
const { validateToken, checkauthorise } = require('../middleware/auth');
//const { authenticate, authorise } = require('../middleware/auth');


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController2.createUser)

// router.post("/login", userController2.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId",validateToken,checkauthorise, userController2.getUserData)
// router.post("/users/:userId/posts", userController2.postMessage)

// router.put("/users/:userId", validateToken,checkauthorise,userController2.updateUser)
// //router.delete('/users/:userId', userController.deleteUser)
// router.delete("/users/:userId",userController2.DeletedUser)

router.post("/singup",userController2.userresiter)
router.post("/login",userController2.userlogin)
router.get("/users/:userId",userController2.getuser)
router.put("/users/:userId",userController2.updateuser)


module.exports = router;