import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import connectDB from "./config/dbConfig.js";

dotenv.config();

connectDB();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});