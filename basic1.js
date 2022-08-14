const app=require("./export_data") //to import

// console.log(app.x);
// console.log(app.y);
// console.log(app.z());
 
const arr=[1,2,3,4,5,6];
//filter is used on Arrays only ,to filter data inside an array.

var result =arr.filter((item)=>{ //item as argument
    //  console.log(item)
    return item>=3;
})
console.log(result);

console.log("directory name is: ",__dirname);
console.log("file name is: ",__filename);