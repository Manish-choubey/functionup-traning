const { request } = require('express');
const express = require('express');
//const xyz = require('lodash');
//const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
   // abc.printName()
    //logger.welcome()

    res.send('My second ever api!')
});


router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)

})


router.get('/movie', function (req, res){
    let movielist = ['don', 'mai hu na', 'dar', 'badla koon ka']
    res.send(movielist)
})



router.get('/movies/:Number', function (req, res){
    let movielist = ['don', 'mai hu na', 'dar', 'badla koon ka']
    let requestParams = req.params;
    let studentName = requestParams.indexNumber
    for(let i in movielist){
        let Number = movielist[i]
       if (studentName ===i){
            return res.send(movielist[i])
            break
        }
    }
  return res.send('Eror: use a vail index')
})
    

//    Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 



router.get('/film/:filmds',function(req ,res){
    let movieName = [{"id":1, "name": "the shining"},{"id":2, "name":"dar" },{"id":3, "name": "rang de basanti"}]
      
    
    let requestParams = req.params;
    let studentName = requestParams.name
    let Number =movieName.idd
    for(let i in movieName)

      if (movieName.name===1){
        if (movieName.name===1){
            console.log(movieName)
        }else
        console.log(eror)
    }
    })





//router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    //let requestParams = req.params

    // JSON strigify function helps to print an entire object
     //We can use any ways to print an object in Javascript, JSON stringify is one of them
   // console.log("This is the request "+ JSON.stringify(requestParams))
 //let studentName = requestParams.name
    //console.log('Name of the student is ', studentName)
    
  //  res.send('Dummy response')
//})

module.exports = router;