import express from "express";
import { APP_PORT } from "./config";


const app = express();


// Starting the server
app.listen(APP_PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});