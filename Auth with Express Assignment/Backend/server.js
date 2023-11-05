import express from 'express';
import { APP_URL,PORT,databaseConnect} from './config';
import { errorHandler } from './middlewares';
import routes from './routes';
import cors from 'cors';
const app=express();
databaseConnect();


app.use(express.json());
app.use(cors());
app.use('/api',routes);

app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Listening on ${APP_URL}:${PORT} `);
})