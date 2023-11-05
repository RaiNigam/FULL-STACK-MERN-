import { User } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import bcrypt from 'bcrypt';
import { jwtServices } from "../../services";

const loginController={
    async login(req,res,next){
        const {username,password}=req.body;
        try{
            const user=await User.findOne({username});
            if(!user){
                return next(CustomErrorHandler.wrongCredentials());
            }
            const match=await bcrypt.compare(password,user.password);
            if(!match){
                return next(CustomErrorHandler.wrongCredentials('Password is wrong'));
            }
            const access_token= jwtServices.sign({_id:user.id,email:user.email});
            res.json({access_token:access_token});
        }catch(err){
            return next(err);
        }
        
    }
}
export default loginController;