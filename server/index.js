import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import kpiRoutes from "./routes/kpi.js";
import kpiModel from "./models/kpiModel.js";
import kpis from "./datagen.js";
// SALES //
import { Customers } from "./models/customerModel.js";
import { Orders } from "./models/orderModel.js";
import { Payments } from "./models/paymentModel.js";
import { Products } from "./models/productModel.js";
import { Reviews } from "./models/reviewModel.js";
import { Sellers } from "./models/sellerModel.js";
import { Sales } from "./datagen.js";

import salesRouter from "./routes/salesRouter.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/sales", salesRouter);

/* MONGOOSE SETUP + SERVER START */
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL || "";
mongoose
  .connect(MONGO_URL)
  .then(async () => {
    // await kpiModel.deleteMany({});
    // await kpiModel.insertMany(kpis);
    // await Customers.deleteMany({});
    // await Orders.deleteMany({});
    // await Payments.deleteMany({});
    // await Products.deleteMany({});
    // await Reviews.deleteMany({});
    // await Sellers.deleteMany({});
    // await Customers.insertMany(Sales.Customers);
    // await Orders.insertMany(Sales.Orders);
    // await Payments.insertMany(Sales.Payments);
    // await Products.insertMany(Sales.Products);
    // await Reviews.insertMany(Sales.Reviews);
    // await Sellers.insertMany(Sales.Sellers);
    app.listen(PORT, () => {
      console.log(`🚀 ~ App: Ready on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("~ Mongoose ~ error :", error);
  });
