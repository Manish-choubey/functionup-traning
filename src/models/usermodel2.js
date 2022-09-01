
const { Schema, default: mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
    Username:String,
    Email:String,
    Password:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        enum:["male","female","other"]
    },
    Dob:String,
    contactNumber:Number,
    Role:{
        type:String,
        value:["admin","user"]
    },
    isDeleted:{
        type:String,
        default:false
    },
    post :{
        type: String,
        default:[]

    },
    age:Number,
},{timestamps:true})

module.exports = mongoose.model("userdata",userSchema)