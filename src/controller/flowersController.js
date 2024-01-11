import { flowersModel } from "../model/flowersModel.js";

export const getAllFlowers = async (req, res) => {
  try {
    const flowers = await flowersModel.find({});
    res.status(200).json(flowers);
  } catch (error) {
    res.send("Flowers are not found");
  }
};
export const getOneFlower = async (req, res) => {
  const { id } = req.params;
  const flower = await flowersModel.findById(id);
  res.send(flower);
};
export const createFlowers = async (req, res) => {
  try {
    const { image, name, price } = req.body;
    const newFlowers = new flowersModel({ image, name, price });
    await newFlowers.save();
    res.send("Flower is created!");
  } catch (error) {
    res.send("Flower is not created!");
  }
};
export const deleteFlowers = async (req, res) => {
  const { id } = req.params;
  const flower = await flowersModel.findByIdAndDelete(id);
  res.send(flower);
};
