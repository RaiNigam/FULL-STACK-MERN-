import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.send({msg:`I am homepage`});
})
app.get('/about',(req,res)=>{
    res.send({msg:`I am about page`});
})
app.get('/contact',(req,res)=>{
    res.send({email:`support@pwskills.com`});
})
app.listen(5000,()=>{
    console.log("Server running at port 5000");
})
