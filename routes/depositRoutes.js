const express = require('express');
const router = express.Router();
const depositController = require('../controllers/depositController');

// API to get all deposits
router.get('/deposits', depositController.getAllDeposits);

// API to get deposit details by customer ID
router.get('/deposits/:customer_id', depositController.getDepositByCustomerId);

// API for adding a new deposit
router.post('/deposits', depositController.addDeposit);

// API for updating deposit details
router.put('/deposits/:customer_id', depositController.updateDeposit);

// API for deleting a deposit
router.delete('/deposits/:customer_id', depositController.deleteDeposit);

module.exports = router;
