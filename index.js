import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { flowersRouter } from "./src/router/flowersRouter.js";

const app = express();
const port = process.env.PORT;
const key = process.env.SECRET_KEY;

app.use(express.json());
app.use(cors());
app.use("/flowers", flowersRouter);

mongoose
  .connect(key)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
