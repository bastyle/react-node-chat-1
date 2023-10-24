const express = require('express')

const cors = require("cors")
const { default: mongoose } = require('mongoose')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
// DB Connection
app.get("/api", (req, res)=>{
    res.json({"msg":"hello world!"})
})

//app.listen(5000, ()=>{console.log("server started on port 5000.")})
app.listen(process.env.PORT, ()=>{console.log("server started on port: "+process.env.PORT+" ...")})