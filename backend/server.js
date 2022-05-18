import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import conn from "./config/db_config.js";
import signup_route from "./routes/signup_route.js";
import login_route from "./routes/login_route.js";
import createcollection_route from "./routes/createcollection_route.js";
import publish_route from "./routes/publish_route.js";
import profile_route from "./routes/profile_route.js";

// variables
const app = express();
const PORT = process.env.PORT || 5000;

// app config
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes config
app.use("/signup", signup_route);
app.use("/login", login_route);
app.use("/createcollection", createcollection_route);
app.use("/publish", publish_route);
app.use("/profile", profile_route);

//use env file
dotenv.config();

app.listen(PORT, (err) => {
  if (err)
    return console.log(`Cannot listen to port: ${PORT} with error: ${err} `);
  console.log(`Connected to PORT ${PORT}`);
  //connect to database once server is running
  conn();
});
