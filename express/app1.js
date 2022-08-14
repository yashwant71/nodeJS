const express=require('express');
const app =express();

// app.get('',(req,res)=>{
   //     res.send('hello ,this is home page')
   // })
   // app.get('/about',(req,res)=>{
//     res.send('hello ,this is about page')
// })
 app.get('',(req,res)=>{
    res.sendFile(`${__dirname}/home.html`)
 })
 app.get('/about',(req,res)=>{
    res.sendFile(`${__dirname}/about.html`)
   })
   
   //now to add a dynamic profile page we use template engine
   //dynamic pages are where data may fetched from somewhere ,i.e. from server to client
app.set('view engine','ejs');
 app.get('/profile',(req,res)=>{
    const user={
        name:'yash yadav',
        email:'yash@mail.com',
        skills: ['c++','js','nodejs','mysql']
    }
    res.render(`${__dirname}/profile.ejs`,{user}); //if we dont specify dirname before it, views directory will be default lookup for render
 })


 app.get('*',(req,res)=>{
    res.sendFile(`${__dirname}/404.html`)
 })

app.listen(4000);
