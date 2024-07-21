const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
