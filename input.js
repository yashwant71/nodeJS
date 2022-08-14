const fs=require('fs');

// console.log(process.argv); //argv[0] ,arg[1] are fixed for paths of nodejs apk file ,current path.
//if we type in terminal
//node input.js hello
//"hello" will be shown as a process.argv[2]..and so on.

// to make :- //  node input.js add data.txt 'data for input.js'
const inp=process.argv;
console.log(inp[2]);
if(inp[2]=='add'){
    fs.writeFileSync(inp[3],inp[4]);
}
else if(inp[2]=='remove'){
    fs.unlinkSync(inp[3]);
}
else{
    console.log("invaild type");
}