import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import http from 'http'

const app = express();
dotenv.config();

// server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods:["GET","POST"],
    credentials: true
  }
});

io.on("connection", (socket)=>{
    console.log("User Connected", `${socket.id}`)

    socket.on("disconnect", ()=>{
        console.log("User Disconnected");
    })
})

server.listen(process.env.PORT || PORT, ()=>{
    console.log("Server running at port 3000");
})


