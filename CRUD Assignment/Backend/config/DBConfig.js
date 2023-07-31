import mongoose from 'mongoose';
import {} from 'dotenv/config';

export const databaseConnect=()=>{
    const MONGODB_URL=process.env.MONGODB_URL;
    mongoose
    .connect(MONGODB_URL)
    .then((conn)=>{
        console.log(`Connected to DB:${conn.connection.host}`);
    })
    .catch((e)=>{
        console.log(e);
    })
}