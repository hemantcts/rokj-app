const { type } = require("@testing-library/user-event/dist/type");
const { text } = require("express");
const mongoose = require ("mongoose");
const {Schema} = mongoose;

const userInfoSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    comment : {
        type : String
    },
    date : {
        type : String
    }
})

const usersInfo = mongoose.model("usersInfo", userInfoSchema);

module.exports = usersInfo;