let axios = require("axios");
//const { post } = require("../routes/route");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




const getvaccination= async function(req,res){
      let _id = req.query.district_Id
      let date = req.query.date
      let options ={
        method:"get",
        url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021`,

      }
      let result = await axios(options)
      //console.log(result.data)
      res.send({msg:result.data})
}


const getshortedcity = async function (req,res){
    let cities = ["Bengaluru","Mumbai","Delhi","kolkata","Chennai","London","Moscow"]
    let citiObjArray=[]
    for(i=0;i<cities.length;i++){
        let obj= {city:cities[i]}
        let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1cbefa27a8ad48b3137cf353808db0ea`)
        console.log(resp.data.main.temp)
        obj.temp=resp.data.main.temp
        citiObjArray.push(obj)
    }
    let sorted = citiObjArray.sort(function(a,b){return a.temp-b.temp})
    console.log(sorted)
    res.send({status:true,data:sorted})
}



const creatememe =async function(req,res){
    let options={
        method:"post",
        url:("https://api.imgflip.com/caption_image?temlate_id=178591752&text0=learningcoding&text1=hardthing&username=chewie12345&password=meme@123")
    }
    let result = await axios(options)
    res.send({data:result.data})
}

module.exports.getshortedcity=getshortedcity
module.exports.creatememe =creatememe 

module.exports.getvaccination=getvaccination
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp