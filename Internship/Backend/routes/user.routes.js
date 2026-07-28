import express from "express";

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Create User
router.post("/", createUser);

// Get All Users
router.get("/", getUsers);

// Get Single User
router.get("/:id", getUserById);

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

export default router;
