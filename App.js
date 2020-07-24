import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js";
import cors from "cors";

const app = express();
app.use(cors());

const uri = process.env.MONGODB;

(async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Erro ao conectar ao banco :" + error);
  }
})();

app.use(express.json());
app.use("/studentRouter", studentRouter);
app.listen(process.env.PORT || 3000, () => console.log("Api Iniciada"));
