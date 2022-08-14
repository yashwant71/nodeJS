const dbconnect =require('./mongodb');

const updatedata =async ()=>{
    const db=await dbconnect();
    const result=await db.updateOne({name:'dsa lecture'},{$set:{name:'love babbar'}})
    // const result=await db.update({name:'dsa lecture'},{$set:{name:'love babbar'}})
    //to update all matches-^
    console.warn(result);
}
updatedata();