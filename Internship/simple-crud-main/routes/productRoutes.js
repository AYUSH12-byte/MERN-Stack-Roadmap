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
router.route('/').post(createProduct). get(getProducts);

// READ ONE
router.route('/:id').get(getProductById). put(updateProduct).delete(deleteProduct);

module.exports = router;