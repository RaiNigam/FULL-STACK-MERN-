import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name is required"],
        minLength:[5,"Must be greater than 5"],
        maxLength:[50,"Must be less than 50"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[8,"Must be greater than 8"]
    }  
});
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=await bcrypt.hash(this.password,10);
})

const userModel=mongoose.model("users",userSchema);
export default userModel;