import app from './app.js';
import {} from 'dotenv/config';
const PORT=process.env.PORT||6000;
app.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});