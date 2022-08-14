const mongoose =require('mongoose');
const express =require('express');
const app=express();

mongoose.connect("mongodb://0.0.0.0:27017/mongoose")
const chatSchema =mongoose.Schema({
        text:String
    });
const chatModel =mongoose.model('chat',chatSchema);
app.use(express.json());
app.post('/',async (req,res)=>{ //it runs whenever we get post request
    let data=new chatModel(req.body)
    let result=await data.save()
    console.log("post ran")
    res.send(result) //response we get in return to api
})
app.get('/',async(req,res)=>{
    let data=await chatModel.find();
    res.send(data);
    // console.log(data);
    console.log("get ran")
})
app.delete('/delete/:_id',async(req,res)=>{
    let data=await chatModel.deleteOne(req.params);//we get the id to delete from localhost:4000/delete/"id"
    res.send(data);
    console.log(data);
    console.log("delete ran")
})
app.put('/update/:_id',async(req,res)=>{
    let data=await chatModel.updateOne(req.params,{$set:{text:"updated text"}})
    res.send(data);
    console.log(data);
    console.log("put ran");

})

app.listen(4000);