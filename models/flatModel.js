const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
    flatNo : {type:String ,unique : true, required: true},
    rent : {type:String , required: true},
    description : {type:String , required: true},
})

const flatModel = mongoose.model('flats', flatSchema)

module.exports = flatModel;
