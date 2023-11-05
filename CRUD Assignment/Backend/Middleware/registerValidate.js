const registerValidate=(req,res,next)=>{
    const{user_name,user_email,user_password}=req.body;
    if(user_name&&user_email&&user_password){
        const userDetails=req.body;
        return next();
    }else{
        return res.status(400).json({
            success:false,
            message:"All input fields are required"
        })
    }

}
export {registerValidate};