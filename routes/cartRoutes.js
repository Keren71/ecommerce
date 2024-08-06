const express = require('express');
const {
  
  addToCart,
  viewCart,
  updateCartItem,
  removeFromCart

} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/cart', protect, addToCart);
router.get('/cart', protect, viewCart);
router.put('/cart/:itemId', protect, updateCartItem);
router.delete('/cart/:itemId', protect, removeFromCart);

module.exports = router;
