import express from "express";
import dotenv from "dotenv";
import {
  getProduct,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import { jwtVerify } from "../middleware/middleware.js";

dotenv.config();

const router = express.Router();

router.use("/", jwtVerify);

router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
