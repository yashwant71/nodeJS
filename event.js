const express =require('express');
const EventEmitter =require('events');//eventemitter is a class ,capital E indicates
const app=express();

const obj =new EventEmitter();  //created a object of class

let count =0;

obj.on('counted_api', ()=>{ //whenever "counted_api" ran through obj.emit ,this fuction executes
    count++;
    console.log("api ran: "+count);
})
app.get('/',(req,res)=>{
    res.send("api called")
    obj.emit("counted_api")
})
app.get('/test1',(req,res)=>{
    res.send("api called")
    obj.emit("counted_api")
})
app.get('/test2',(req,res)=>{
    res.send("api called")
    obj.emit("counted_api")
})
app.listen(4000);