const {MongoClient}= require('mongodb')
const url ='mongodb://0.0.0.0:27017';
const databasename='youtube';
const client = new MongoClient(url);

async function dbconnect(){
    let result=await client.connect();
    db=result.db(databasename);
    return db.collection('video');
}
module.exports=dbconnect;