const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const cors=require('cors')
const app=express();
app.use(cors())


app.get("/",(_,res)=>{
    res.send("hello world");
})

module.exports=app;