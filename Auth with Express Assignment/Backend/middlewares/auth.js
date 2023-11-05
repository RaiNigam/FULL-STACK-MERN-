import { CustomErrorHandler, jwtServices } from "../services";

const auth=async(req,res,next)=>{
    
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return next(CustomErrorHandler.notAuthorized());
    }
    try{
        const token=authHeader.split(' ')[1];
        const {_id,email}= jwtServices.verify(token);
        const user={
            _id,
            email
        }
        req.user=user;
        next();
    }catch(error){
        return next(CustomErrorHandler.notAuthorized());
    }
    }
    
export default auth;