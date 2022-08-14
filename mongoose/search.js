const express=require('express');
const app =express();
const mongoose =require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/youtube")
const videoSchema =mongoose.Schema({
        name:String,
        channel:String,
        about:String,
        views:Number
    });
const videoModel =mongoose.model('video',videoSchema);

app.get('/search/:Name/:About',async(req,res)=>{
    console.log(req.params.key);
    const data =await videoModel.find({"$or":[{"name":{$regex:req.params.Name}},{"about":{$regex:req.params.About}}]})
    res.send(data);
    console.log(data);
})

app.listen(4000);