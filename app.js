const express = require("express")
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const {MongoClient} = require("mongodb")
const app = express()
const employeeRoutes = require('./routes/employeeRoutes')

dotEnv.config()

app.use(bodyparser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MONGO DB Connected successfully")
})
.catch((err)=>{
    console.log("E",err)
})

app.use('/employees',employeeRoutes)

app.listen(5500,()=>{
  console.log("Server Started")  
})






