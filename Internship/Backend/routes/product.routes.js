import express from "express";
import { addProduct } from "../controllers/product.controllers.js";

const router = express.Router();

router.post("/add", addProduct);

export default router;