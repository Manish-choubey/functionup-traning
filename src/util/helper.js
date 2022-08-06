const today = new Date();
const currentMonth = today.getMonth();

function getBatchInfo(){
    return "Plutonium, W3D5, the topic for today is Nodejs module system"
}




console.log('the current date is ', 6 )
    console.log('the current month is : ', 8 )
    console.log('the week is',3 )
    console.log('the total day is',17 )
    console.log('batch name is plutonium and topic tought  node js,' )

module.exports.date=today;
module.exports.month=currentMonth+1;
module.exports.Batchinfo=getBatchInfo();