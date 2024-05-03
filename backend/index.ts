import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();
const port = process.env.PORT || 8000;
// const mongoose = require("mongoose");

// const connectDb = require("./config/db");
//Config dot env variables
dotenv.config({ path: "backend/config/.env" });

const bodyParser = require("body-parser");

//allow postman and html forms to be parsed
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connectDb();

app.get("/v1", (req: Request, res: Response) => {
  res.status(200).send("Welcome to URL Shortener.");
});

// mongoose.set("strictQuery", true);

//Routes imports
// const auth = require("./routes/auth");

//Routes
// app.use("/v1/auth", auth);

// app.use(express.static(path.join(__dirname, "../frontend/build/")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

app.listen(port, () => {
  console.log(
    `Server started on PORT : ${port} in ${process.env.NODE_ENV} mode.`
  );
});
