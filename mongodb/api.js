const express =require('express');  
const dbconnect = require('./mongodb');
const app =express();

app.get('/',async(req,resp)=>{
    let data= await dbconnect();
    data =await data.find().toArray();
    resp.send(data);
})
app.use(express.json());
app.post('/',async(req,resp)=>{
    let data= await dbconnect();
    let result = await data.insert(req.body);
    resp.send(result);
})//to insert data into database via post api 
//send postman post request to use this .

// app.put('/',async(req,resp)=>{
//     let data= await dbconnect();
//     let result = await data.update({name:"marvel"},{$set:{name:"mcu "}});
//     resp.send({result:"update"});
// })
app.put('/:xyz',async(req,resp)=>{
    let data= await dbconnect();
    let result = await data.update({name: req.params.xyz},{$set:req.body});
    resp.send({result:"update"});
})
//we are upadating data of name "mrbeast" -> localhost:4000/mrbeast
//to new data from request ,via postman we give as in json/application file
// {
//      "name":"beast",
//      "channel":"mrbeast",
//      "about":"entertain",
//      "views":"500"
// }
const mongo =require('mongodb');
app.delete('/:id',async(req,res)=>{
    let data =await dbconnect();
    let result =await data.deleteOne({_id:new mongo.ObjectId(req.params.id)})
    res.send("done")
})//we are upadating data of _id ~"some id copied here" -> localhost:4000/"some id copied here"

app.listen(4000);
// dont forget to start mongod server before working on mongodb
