export const loginValidate=(req,res,next)=>{
    const {user_email,user_password}=req.body;
    if(user_email&&user_password){
        return next();
    }
    return res.status(400).json({
        success:false,
        message:"All input fields are required"
    })
}