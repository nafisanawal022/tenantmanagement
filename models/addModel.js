const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
    firstName : {type:String , required: true},
    lastName : {type:String , required: true},
    email : {type:String , required: true},
    contactNumber : {type:String , required: true},
    altContactNumber : {type:String , required: true},
    nidNo : {type:String , required: true},
    flatNo : {type:String , required: true},
    rent : {type:Number , required: true},
    password : {type:String , required: true}
})
const addModel = mongoose.model('flats', flatSchema)

module.exports = addModel