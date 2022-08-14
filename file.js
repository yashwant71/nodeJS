const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'files');

//now to create 5 files in files directory
for(i=0;i<5;i++){
    fs.writeFileSync(dirpath+`/file${i}.txt`,"some data");
}
//to read the files inside files directory
fs.readdir(dirpath,(err,files)=>{
    // console.warn(files);
    files.forEach((i)=>{
        console.log("file name is ",i);
    })
})
