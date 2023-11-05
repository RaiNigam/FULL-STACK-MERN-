import Joi from 'joi';

const loginDataValidate=async(req,res,next)=>{
    const userSchema=Joi.object({
        username:Joi.string().required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    })
    const {error}=userSchema.validate(req.body);
    if(error){
        return next(error);
    }
    next();

}
export default loginDataValidate;