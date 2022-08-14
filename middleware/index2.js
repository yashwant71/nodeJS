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

app.get('',(req,res)=>{
    res.send('welcome to home page!')
})
app.get('/about',(req,res)=>{
    res.send('welcome to about page!')
})
// localhost.4000/user?age=20
// single middleware

// app.get('/user',reqfilter,(req,res)=>{
//     res.send('welcome to user page!')
// })

// or 
const route=express.Router();
route.use(reqfilter)
route.get('/user',(req,res)=>{
    res.send('welcome to user page!')
})
app.use('/',route)

app.listen(4000)