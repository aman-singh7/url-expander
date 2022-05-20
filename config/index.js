import dotenv from "dotenv";

dotenv.config();

export const {
    APP_PORT,
    MONGOURI
} = process.env;
