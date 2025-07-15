const mongoose = require('mongoose');
const Schema = mongoose.Schema
const User = require('./user')

const claimHistorySchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: User
    },
    claimedPoints:{
        type:Number
    },
    claimedAt:{
        type:Date,
        default:Date.now()
    }
})

const claimHistory = mongoose.model("claimHistory",claimHistorySchema);

module.exports = claimHistory