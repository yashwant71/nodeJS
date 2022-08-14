const mongoose =require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/youtube")
const videoSchema =mongoose.Schema({
        name:String,
        channel:String,
        about:String,
        views:Number
    });
const videoModel =mongoose.model('video',videoSchema);