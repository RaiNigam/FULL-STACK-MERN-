import userModel from '../models/model.js';
import emailValidator from 'email-validator';
import bcrypt from 'bcrypt';

const home=(req,res)=>{
    res.status(200).json({
        data:"Hi there!"
    })
}
const register=async(req,res)=>{
    const{user_name,user_email,user_password}=req.body;
    try{    
        if(user_name.length<5||user_name.length>50||user_password.length<8){
            throw new Error("Check the length of respective fields");
        }
        const regexPass=/(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`\   [\]]))(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{4,}/
        if(regexPass.test(user_password)==false){
            throw new Error("Please check your password");
        }
        const validEmail=emailValidator.validate(user_email);
        if(!validEmail){
            throw new Error("Please input a valid email");
        }
        // const userInfo=userModel(req.body);LL
        // const user=await userInfo.save();
        const user=await userModel.create({
            name:user_name,email:user_email,password:user_password
        })
        res.status(200).json({
            success:true,
            message:'User Registered Succesfully',
            data:user
        })
    }catch(e){
        if(e.code==11000){
            return res.status(400).json({
                success:false,
                message:"An account already exists with this email id."
            })
        }
        console.log(e);
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    
}
const login=async(req,res)=>{
    try{
        const {user_email,user_password}=req.body;
        const user=await                    userModel.findOne({email:user_email}).select('+password');
        if(!user|| !(await bcrypt.compare(user_password,user.password))){
            return res.status(400).json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        // if(user_email==user.email&&user_password==user.password){
            return res.status(200).json({
                success:true,
                message:"User login successfully",
                data:user
            })
        // }else{
            // return res.status(400).json({
            //     success:false,
            //     message:"Invalid Password"
            // })
        // }
        
    }catch(e){
        console.log(e);
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
   
}
export {home,register,login}