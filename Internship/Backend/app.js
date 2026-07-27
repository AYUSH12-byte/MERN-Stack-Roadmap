import express from "express";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(express.json()); // ✅ body parser

app.use("/api/products", productRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});