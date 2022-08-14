const {MongoClient}= require('mongodb')
// const MongoClient =require('mongodb').MongoClient
const url ='mongodb://0.0.0.0:27017';
const databasename='youtube';
const client = new MongoClient(url);

async function getdata(){
    let result=await client.connect();
    db=result.db(databasename);
    collection =db.collection('video');
    let data =await collection.find({name:'harry'}).toArray();
    console.log(data);
}
getdata();