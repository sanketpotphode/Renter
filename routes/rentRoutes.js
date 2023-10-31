const express = require('express');
const router = express.Router();
const rentController = require('../controllers/rentController');

// API to get all rents
router.get('/rents', rentController.getAllRents);

// API to get rent details by rent ID
router.get('/rents/:id', rentController.getRentById);

// API for adding a new rent
router.post('/rents', rentController.addRent);

// API for updating rent details
router.put('/rents/:id', rentController.updateRent);

// API for deleting a rent
router.delete('/rents/:id', rentController.deleteRent);

module.exports = router;
