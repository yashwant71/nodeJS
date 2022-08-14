const dbconnect=require('./mongodb');

const deletedata =async ()=>{
    const db =await dbconnect();
    const result= await db.deleteOne({name:'harry'});
    console.log(result)
}
deletedata();