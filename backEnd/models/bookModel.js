const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname : {required : true, type : String},
    author : {  required : true, type : String},
    price : {   required : true, type : Number},
    description : {required : true, type : String},
    image : {   required : true, type : String},
})


module.exports = mongoose.model('books', bookSchema);