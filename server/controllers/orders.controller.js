import { Orders } from "../models/orderModel.js";

export const getCategoryList = async (req, res) => {
  try {
    const orders = await Orders.find().select("items.category items.itemPrice");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
