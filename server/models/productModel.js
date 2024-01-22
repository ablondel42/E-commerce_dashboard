import mongoose from "mongoose";
import { Currency } from "../utils/utils.js";

const ProductSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      index: true,
    },
    productName: String,
    price: Currency,
    quantityAvailable: Number,
    category: String,
    sellerIds: [String],
  },
  { timestamps: true, toJSON: { getters: true } }
);

ProductSchema.index({ productId: 1 });

export const Products = mongoose.model("products", ProductSchema);
