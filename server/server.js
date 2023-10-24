const express = require('express')

const cors = require("cors")
const { default: mongoose } = require('mongoose')
const UserModel = require('./model/User')
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
    //const UserModel = mongoose.model('UserModel', User)
    const userTest = new UserModel({username:'Bastian', email:'bastian.bastias@gmail.com',password:'weCanTalk2023'})
    userTest.save().then(doc => {
        console.log('user saved:', doc);
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
});
//test endpoint 
app.get("/api", (req, res)=>{
    res.json({"msg":"hello world!"})
})

//app.listen(5000, ()=>{console.log("server started on port 5000.")})
app.listen(process.env.PORT, ()=>{console.log("server started on port: "+process.env.PORT+" ...")})