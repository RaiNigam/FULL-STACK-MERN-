import express from 'express';
const app=express();
let counter=0;

app.get('/',(req,res)=>{
    res.send({"Counter":counter});
})
app.get('/increment',(req,res)=>{
    counter=counter+1;
    res.send({"Counter":counter});
})
app.get("/decrement",(req,res)=>{
    counter=counter-1;
    res.send({"Counter":counter});
})
app.listen(5000,()=>{
    console.log("The server is running at port 5000");
})