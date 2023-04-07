const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    firstName : {type:String , required: true},
    lastName : {type:String , required: true},
    email : {type:String , required: true},
    username : {type:String , required: true},
    password : {type:String , required: true}
    })
    const adminModel = mongoose.model('admins', adminSchema)



module.exports = adminModel;
