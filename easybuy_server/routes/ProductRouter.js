import express from "express";
import dotenv from "dotenv";
import {
    getProduct,
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";

dotenv.config();

import auth from "../passportMiddleware.js";

const router = express.Router();

router.get("/", getProduct);
router.get("/", getAllProducts);
router.post("/", auth, addProduct);
router.put("/", auth, updateProduct);
router.delete("/", auth, deleteProduct);

export default router;