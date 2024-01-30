const  mongoose  = require("mongoose");

//create schema



const userSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    age:{
        type: Number,
        required : true
    },
    createdON: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("User", userSchema);