import express from "express";
import {
  createFlowers,
  deleteFlowers,
  getAllFlowers,
  getOneFlower,
} from "../controller/flowersController.js";
import { myLogger } from "../middleware/Logger.js";
export const flowersRouter = express.Router();

flowersRouter.get("/", myLogger, getAllFlowers);
flowersRouter.get("/:id", getOneFlower);
flowersRouter.post("/", createFlowers);
flowersRouter.delete("/:id", deleteFlowers);
