import { JWT_SECRET } from "../config";
import jwt from 'jsonwebtoken';
class jwtServices{
        static sign(payload,secret=JWT_SECRET,expiry='60s'){
        return jwt.sign(payload,secret,{expiresIn:expiry});
    }
    static verify(token,secret=JWT_SECRET){
        return jwt.verify(token,secret);
    }
}
export default jwtServices;