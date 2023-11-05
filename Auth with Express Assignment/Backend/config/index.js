import {} from 'dotenv/config';

export const {
    APP_URL,
    PORT,
    DEBUG_MODE,
    DB_URL,
    JWT_SECRET
}=process.env;
export {default as databaseConnect} from './DatabaseConnect'