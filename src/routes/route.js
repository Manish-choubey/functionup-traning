const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
const Newbookcontroller= require("../controllers/Newbookcontroller")
const Newauthorcontroller= require("../controllers/Newauthorcontroller")
 const Newpublishercontroller= require("../controllers/Newpublishercontroller")
// const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

 //router.get("/bookbyupdate", Newbookcontroller.bookbyupdate)

 router.post("/createBook", Newbookcontroller.createBook  )

router.put("/newupdateapi", Newbookcontroller.newupdateapi)

 router.get("/getBooksWithAuthorDetails", Newbookcontroller.getBooksWithAuthorDetails)


router.post("/createAuthor", Newauthorcontroller.createAuthor  )

router.post("/createPulisher", Newpublishercontroller.createPublisher )


module.exports = router;