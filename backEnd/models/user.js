const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    email: {  required : true, type : String},
    password : {   required : true, type : String},
    username : {required : true, type : String},
    phone : {required : true, type : Number}

})

module.exports = mongoose.model('user', userModel);

