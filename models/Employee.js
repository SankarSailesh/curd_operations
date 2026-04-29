const mongoose = require("mongoose")

const employeeSchems = new mongoose.Schema({
    name:{type:String,
            required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        default : false
    },
    city:{
        type:String,
    }
})

module.exports = mongoose.model("Employee",employeeSchems)