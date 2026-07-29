const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controller/userController');

// CREATE
router.post('/', createUser);

// READ ALL
router.get('/', getUsers);

// READ ONE
router.get('/:id', getUserById);

// UPDATE
router.put('/:id', updateUser);

// DELETE
router.delete('/:id', deleteUser);

module.exports = router;