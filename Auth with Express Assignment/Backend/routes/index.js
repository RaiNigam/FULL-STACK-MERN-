import express from 'express';
import { loginController, registerController, userController } from '../Controllers';
import { signUpDataValidate ,loginDataValidate, auth} from '../middlewares';
const router=express.Router();
router.post('/signup',signUpDataValidate,registerController.signup);
router.post('/signin',loginDataValidate,loginController.login);
router.get('/',auth,userController.show);


export default router;