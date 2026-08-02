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
const upload = require('../middleware/uploadmiddle');

// CREATE
// router.post('/', upload.array('image', 2), createUser); for multiple array
//  router.post('/', upload.single('image'), createUser);  for single

router.post('/', upload.fields([{name:'front'},{name:'back'}]), createUser); 


// Login
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