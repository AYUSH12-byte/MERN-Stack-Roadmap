const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controller/userController');
const { loginUser } = require('../controller/auth.controller');
const verifyToken = require('../middleware/authmiddleware');

// CREATE
router.post('/', createUser);
router.post('/login', loginUser);

// READ ALL
router.get('/',verifyToken, getUsers);

// READ ONE
router.get('/:id',verifyToken, getUserById);

// UPDATE
router.put('/:id', updateUser);

// DELETE
router.delete('/:id', deleteUser);

module.exports = router;