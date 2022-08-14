const http =require('http');


http.createServer((req,res)=>{
    res.write("hello there!")
    res.end();
}).listen(4500);
//or

// function tempfunc(req,res){
//     res.write("hello there again!");
//     res.end();
// }
// http.createServer(tempfunc).listen(4500);