import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import ProductRouter from "./routes/ProductRouter.js";
import UserRouter from "./routes/UserRouter.js";
import CategoryRouter from "./routes/CategoryRouter.js";

dotenv.config();

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`METHOD: ${req.method}`);
  console.log(`PATH: ${req.path}`);
  console.log("BODY: ", req.body);
  console.log("QUERY: ", req.query);
  console.log("PARAMS:", req.params);
  next();
});

const connectMongoose = async () => {
  await mongoose.connect("mongodb://localhost:27017/EasyBuyDB");
};
await connectMongoose();

app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
