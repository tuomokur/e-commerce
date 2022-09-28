import express from "express";
import dotenv from "dotenv";
import {
  getCategory,
  getAllCategories,
  addCategory,
} from "../controllers/CategoryController.js";
import { jwtVerify } from "../middleware/middleware.js";

dotenv.config();
const router = express.Router();

router.use("/", jwtVerify);

router.get("/:id", getCategory);
router.get("/", getAllCategories);
router.post("/", addCategory);

export default router;
