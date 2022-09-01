import express from "express";
import dotenv from "dotenv";
import {
  getCategory,
  getAllCategories,
  addCategory,
} from "../controllers/CategoryController.js";
import auth from "../passportMiddleware.js";

dotenv.config();
const router = express.Router();

router.get("/:id", getCategory);
router.get("/", getAllCategories);
router.post("/", auth, addCategory);

export default router;
