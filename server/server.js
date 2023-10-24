const express = require('express')
const cors = require("cors")
const { default: mongoose } = require('mongoose')
const UserModel = require('./model/userModel')
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messages");
const socket = require("socket.io");
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
    /*const userTest = new UserModel({username:'Bastian', email:'bastian.bastias@gmail.com',password:'weCanTalk2023'})
    userTest.save().then(doc => {
        console.log('user saved:', doc);
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });*/
});
//test endpoint 
app.get("/api", (req, res)=>{
    res.json({"msg":"hello world!"})
})

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);
const server = app.listen(process.env.PORT, ()=>
    console.log("server started on port: "+process.env.PORT+" ...")
);

const io = socket(server, {
    cors: {
      origin: process.env.SOCKET_ORI,
      credentials: true,
    },
  });
  
  global.onlineUsers = new Map();
  io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });
  
    socket.on("send-msg", (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });  