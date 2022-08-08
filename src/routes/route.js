const express = require('express');
const xyz=require('lodash');
//const abc = require('../util/helper')
//const abc = require('../validator/formatter')
//const abc = require('../logger/logger')
//const abc = require('../lntroduction/intro')

const router = express.Router();

router.get('/test-me', function (req, res) {
    
 //console.log('welcom to my aplication', abc.name )
 //abc.printName()
 const months = ['jan', 'feb' ,'march', 'april','may', 'june','july' ,'august', 'sep', 'november', 'decembee'];
const result  = xyz.chunk(months,3)
console.log(result);
const oddnumber = [1,3,5,7,9,11,13,17,19,23];

const result1 = xyz.tail(oddnumber)
console.log(result1);

const newarray = [[1,2],[2,3],[3,4],[4,5]];
const array1 = xyz.union(newarray)
console.log(array1);

const aray = [["horror", "the shining"],["drama","titanic"],["thriller", "shutter"]];
const arra2 = xyz.fromPairs(aray);
console.log(arra2);


 res.send('My second   ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason