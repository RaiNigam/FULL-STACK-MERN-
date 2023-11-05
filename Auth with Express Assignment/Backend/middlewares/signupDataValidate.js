import Joi from 'joi';
import { User } from '../models';
import { CustomErrorHandler } from '../services';
const signUpDataValidate=async(req,res,next)=>{
    const signupSchema=Joi.object({
        name:Joi.string().min(5).max(50).required(),
        username:Joi.string(),
        email:Joi.string().email(),
        password:Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        repeatPassword:Joi.ref('password'),
        bio:Joi.string().required()
    });
    const{error}=signupSchema.validate(req.body);
    if(error){
        return next(error);
    }
    const exists=await User.exists({username:req.body.username,email:req.body.email});
    if(exists){
        return next(CustomErrorHandler.alreadyExists('This email or username is already taken.'));
    }
    next();
}
export default signUpDataValidate; 


