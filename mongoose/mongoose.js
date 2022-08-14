const mongoose =require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/youtube")
const videoSchema =mongoose.Schema({
        name:String,
        channel:String,
        about:String,
        views:Number
    });
const videoModel =mongoose.model('video',videoSchema);// "videos" will be the collection in database

const saveInDB=async ()=>{
    let data =new videoModel({name:"vertasium",channel:"vertasium",about:"education",views:600})
    let result= await data.save();
    console.log(result);
}
const updateInDB =async ()=>{
    let data =await videoModel.updateOne({name:"vertasium"},{$set:{name:"micheal"}});
    console.log(data);
}
console.log('hello')
const findInDB =async ()=>{
    let data =await videoModel.find({name:"vertasium"});
    console.log(data);
}
const deleteInDB =async ()=>{
    let data =await videoModel.deleteOne({name:"micheal"})
    if(data.acknowledged)
    console.log("deleted")
}
// saveInDB();
// updateInDB();
findInDB();
// deleteInDB();
