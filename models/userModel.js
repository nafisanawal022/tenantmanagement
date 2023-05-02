const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {type:String , required: true},
    lastName : {type:String , required: true},
    email : {type:String , required: true},
    contactNumber : {type:String , required: true},
    altContactNumber : {type:String , required: true},
    nidNo : {type:String , required: true},
    flatNo : {type:String ,unique : true, required: true},
    rent : {type:Number , required: true},
    password : {type:String , required: true}
})
const userModel = mongoose.model('users', userSchema)

module.exports = userModel