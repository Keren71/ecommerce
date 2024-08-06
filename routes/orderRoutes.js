
const express = require('express');
const {
  createOrder,
  viewOrders,
  viewOrderById
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/orders', protect, createOrder);
router.get('/orders', protect, viewOrders);
router.get('/orders/:id', protect, viewOrderById);

module.exports = router;


