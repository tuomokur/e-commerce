import express from "express";
import dotenv from "dotenv";
import {
  addUser,
  loginUser,
  refreshToken,
  modifyUser,
  getUser,
} from "../controllers/UserController.js";

dotenv.config();

import { jwtVerify } from "../middleware/middleware.js";

const router = express.Router();

router.post("/register", addUser);
router.post("/login", loginUser);
router.get("/refreshToken", jwtVerify, refreshToken);
router.put("/", jwtVerify, modifyUser);
router.get("/", jwtVerify, getUser);

export default router;
