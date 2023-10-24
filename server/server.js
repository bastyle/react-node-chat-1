const express = require('express')

const cors = require("cors")
const { default: mongoose } = require('mongoose')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
// DB Connection
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser : true ,
    useUnifiedTopology : true
}).then(()=>{
    console.log('connected to db');
});
//test endpoint 
app.get("/api", (req, res)=>{
    res.json({"msg":"hello world!"})
})

//app.listen(5000, ()=>{console.log("server started on port 5000.")})
app.listen(process.env.PORT, ()=>{console.log("server started on port: "+process.env.PORT+" ...")})