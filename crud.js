const fs=require('fs');
const path=require('path');
const dirpath =path.join(__dirname,'files'); 
const filepath= `${dirpath}/crudfile.txt`

fs.writeFileSync(filepath,"this is crud file"); //CREATE
fs.readFile(filepath,'utf8',(err,item)=>{ //READ
    console.log(item);
})
fs.appendFile(filepath,"new append text",(err)=>{ 
    if(!err) console.log("updated")
})

fs.rename(filepath ,`${dirpath}/CRUDFILE.txt`,(err)=>{ //UPDATE
    if(!err) console.log('file name updated');
})
// fs.unlinkSync(`${dirpath}/CRUDFILE.txt`) //DELETE
