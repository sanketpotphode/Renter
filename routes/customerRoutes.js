const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// API to get all customers details
router.get('/customers', customerController.getAllCustomers);

// API to get customer details by customer id
router.get('/customer/:id', customerController.getCustomerById);

// API for add new customer details
router.post('/addCustomer', customerController.addCustomer);

// API for updating customer details
router.put('/updateCustomer/:customer_id', customerController.updateCustomer);

// API to delete customers by updating status
router.put('/deleteCustomer', customerController.deleteCustomer);

module.exports = router;
