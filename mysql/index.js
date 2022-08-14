const express=require('express');
const app=express();
//we start the xampp mysql server ,before running this 
const mysql =require('mysql');
const con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"test",
})
con.connect((err)=>{
    if(err)
    console.warn("error")
})
app.get('/',(req,res)=>{
    con.query("select * from testtable",(err,result)=>{
        if(err)
        res.send("error at query")
        else
        res.send(result)
        console.log(result)
    })
})
//or by request body
// app.use(express.json())
app.post('/',(req,res)=>{
    const data ={id:"7",name:"bill",text:"hello this post request"};
    // const data =req.body;
    con.query("insert INTO testtable SET ?",data,(error,result,field)=>{
        if(error) throw error;
        res.send(result)
        console.log(data)
    });
})
app.put('/',(req,res)=>{
    const data =["tony start","this is put insert statement ",0];
    con.query("UPDATE testtable SET name =?,text=? where id=?",data,(error,result,field)=>{
        if(error) throw error;
        res.send(result)
        console.log(data)
    });
})
app.delete('/:id',(req,res)=>{
    con.query("DELETE FROM testtable WHERE id ="+req.params.id,(error,result)=>{
        if(error) throw error;
        res.send(result);
        console.log("deleted id:")
        console.log(req.params.id);
    })
})


app.listen(4000);