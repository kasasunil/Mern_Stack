const express=require('express');
const router=express.Router();
require('../db/conn');
const User=require("../model/userSchema");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

router.get('/',(req,res)=>{
    res.send('Iam from router home page');
})

router.post('/register',async(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    console.log(req.body);
    if(!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({error:"Plz fill all fields"});
    }
    try{
        const userExist= await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"User already exist"});
        }else if(password!=cpassword){
            return res.status(500).json({error:"Invalid password"});
        }
        const user=new User({name:name,email:email,work:work,phone:phone,password:password,cpassword:cpassword});
        await user.save();
        res.status(201).json({message:`${user.name} registered successfully`});
    }
    catch(err){
        console.log(err);
    }
});

router.post('/login',async (req,res)=>{
    
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(422).json({error:"Plz fill all credentials"});
        }
            const user=await User.findOne({email:email});
        if(user){
            const isMatched=await bcrypt.compare(password,user.password);
            const token=await user.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
            if(isMatched){
                res.status(201).json({message:`Login successful!!! Mr.${user.name}`});
            }
            else{
                res.status(500).json({error:"Invalid credentials"});
            }
        }
        else{
            res.status(500).json({error:"Invalid credentials"});
        }
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;