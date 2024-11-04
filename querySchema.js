const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const querySchema = new Schema({

    fullName : {
        type : String,
        required : true
    }, 

    email : {
        type : String,
        required : true,
        unique : true
    },

    mobileNumber : {
        type : String,
        required : true,
        unique : true
    },

    message : {
        type : String,
        required : true
    },

    creationDateTime:{
        type : Date,
        default : Date.now,
    }



})


module.exports = mongoose.model("query", querySchema);