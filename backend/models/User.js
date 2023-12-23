

const mongoose = require("mongoose")

const userSchema = new Schema({
    name:{
        type: string,
        required: true
    },

    email:{
        type: string,
        required: true
    },

    password:{
        type: string,
        required: true,
        unique: true
    },

    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("user", UserSchema); 