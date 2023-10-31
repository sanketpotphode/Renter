const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

// API to get all properties
router.get('/properties', propertyController.getAllProperties);

// API to get property details by property id
router.get('/property/:id', propertyController.getPropertyById);

// API for adding a new property
router.post('/addProperty', propertyController.addProperty);

// API for updating property details
router.put('/updateProperty/:id', propertyController.updateProperty);

// API to mark a property as inactive
router.put('/deleteProperty/:id', propertyController.deleteProperty);

module.exports = router;