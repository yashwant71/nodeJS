console.log("starting log")//#1

setTimeout(()=>{
    console.log("2 sec log")//#4
},2000)
setTimeout(()=>{
    console.log("0 sec log")//#3
},0)
console.log("finishing log")//#2

//    call stack   =>     node api 
//                             |
//         ^=  callback queue<=|

//#1 goes to call stack
//#2 goes to node api as its a c++/c language function 
//#3 goes to node api
//#4 goes to call stack 
//#1 outputs the log (starting log)
//#4 outputs the log (finishing log)
//smaller delay one betweeen #2 ,#3 ,goes to callback queue first then rest
//#3 goes to call stack from callback queue
//#3 outputs the log after running (0 sec log)
//#2 outputs the log after running (2 sec log)