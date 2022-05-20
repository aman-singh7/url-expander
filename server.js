import express from "express";
import { APP_PORT } from "./config";
import bodyParser from "body-parser";


const app = express();

// Getting data in json format
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
app.use(bodyParser.json({ type: "application/json" }));

// Setting express engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// Starting the server
app.listen(APP_PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});