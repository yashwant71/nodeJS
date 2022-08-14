const { response } = require('express');
const express=require('express')
const app=express();

const reqfilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('provide age')
    }
    else if(req.query.age<18){
        res.send('underage cannot Access')
    }
    else{
        next();
    }
}
app.use(reqfilter)
// localhost.4000/?age=20

app.get('',(req,res)=>{
    res.send('welcome to home page!')
})
app.listen(4000)