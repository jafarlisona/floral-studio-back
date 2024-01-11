import mongoose, { Schema } from "mongoose";

const flowersSchema = new Schema({
  image: String,
  name: String,
  price: Number,
});
export const flowersModel = mongoose.model("flowers", flowersSchema);
