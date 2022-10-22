const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config({path: "./config.env"});
require('./db/conn');

//Middle ware
const middleware=(req,res,next)=>{
    console.log("Middleware raised");
    next();
}
app.use(express.json());
const User=require('./model/userSchema');
app.use(require('./router/auth'));

app.get('/',(req,res)=>{
    res.send('Hello world Iam back!');
})

app.get('/about',middleware,(req,res)=>{
    res.send('This is home page');
})

app.get('/contact',(req,res)=>{
    res.send('This is contact page');
})

app.get('/signin',(req,res)=>{
    res.send("Sign in");
})
const port=process.env.PORT;
app.listen(port,()=>{
    console.log("Sever is running at port 2500");
})