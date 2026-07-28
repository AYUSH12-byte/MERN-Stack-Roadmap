import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;