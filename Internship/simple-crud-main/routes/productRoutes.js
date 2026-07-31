const express = require('express');
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controller/productController');

// CREATE
router.post('/', createProduct);

// READ ALL
router.get('/', getProducts);

// READ ONE
router.get('/:id', getProductById);

// UPDATE
router.put('/:id', updateProduct);

// DELETE
router.delete('/:id', deleteProduct);

module.exports = router;