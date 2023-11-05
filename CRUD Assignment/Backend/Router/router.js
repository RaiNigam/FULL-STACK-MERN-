import express from 'express';
import {home,register,login}from '../Controller/controller.js';
import { registerValidate } from '../Middleware/registerValidate.js';
import { loginValidate } from '../Middleware/loginValidate.js';
const router=express.Router();
router.get('/',home);
router.use('/register',registerValidate,register)
router.post('/login',loginValidate,login);
export default router;