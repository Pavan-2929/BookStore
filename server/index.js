import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./models/user.model.js";
import bookRouter from "./routes/book.route.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log("Server is started");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/book', bookRouter)

app.get("/", (req, res) => {
  res.status(200).json("your server is working");
});
