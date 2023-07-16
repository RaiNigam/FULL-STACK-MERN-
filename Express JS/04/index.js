import express from 'express';
const app=express();
app.get('/random',(req,res)=>{
    let randomNum=Math.floor(Math.random()*10000);
    res.send({random:randomNum});
})
app.listen(5000,()=>{
    console.log("Server running at port 5000");
})