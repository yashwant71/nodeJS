const dbconnect =require('./mongodb');

const insertdata =async ()=>{
    const db= await dbconnect();
    const result= await db.insert(
        [
            {name:'harry',channel:'codewithharry',about:'ed',views:202},
            {name:'mrbeast',channel:'mr beast',about:'ent',views:400}
        ]
    );
    if(result.acknowledged){
        console.log("data inserted");
    }
}
insertdata();