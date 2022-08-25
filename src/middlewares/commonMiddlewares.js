
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log(ip.address());
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}



// var getIP = require('ipware')().get_ip;
// app.use(function(req, res, next) {
//     var ipInfo = getIP(req);
//     console.log(ipInfo);
//     // { clientIp: '127.0.0.1', clientIpRoutable: false }
//     next();
// });

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
