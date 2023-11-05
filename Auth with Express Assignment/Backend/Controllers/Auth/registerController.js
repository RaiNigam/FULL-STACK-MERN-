import { User } from "../../models";
import bcrypt from 'bcrypt';
const registerController={
    async signup(req,res,next){
        console.log(req.body);
        const {name,username,email,password,bio}=req.body
        const hashedPassword=await bcrypt.hash(password,10);
        let user;
        try{
            user=await User.create({
                name,
                username,
                email,
                password:hashedPassword,
                bio
            })
        }catch(err){
            return next(err)
        }
        return res.status(201).json(user);
    }
}
export default registerController;
