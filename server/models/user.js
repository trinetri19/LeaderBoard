const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const userSchema = new  Schema({
    name:{
        type:String,
        required:true
    },
    points:{
        type:Number,
        default:0
    }
})

const User = mongoose.model("User",userSchema);
module.exports = User