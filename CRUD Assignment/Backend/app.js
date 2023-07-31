import express from 'express';
import { databaseConnect } from './config/DBConfig.js';
databaseConnect();
import router from './Router/router.js';
const app=express();
app.use(express.json());
app.use('/',router);
export default app;