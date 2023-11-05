import mongoose from "mongoose";
import { DB_URL } from "./index";
const databaseConnect=async()=>{
    await mongoose.connect(DB_URL)
    .then((conn)=>{
        console.log(`Connected to DB:${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
    })
}
export default databaseConnect;