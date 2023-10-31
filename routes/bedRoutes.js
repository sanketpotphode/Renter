const express = require('express');
const router = express.Router();
const bedController = require('../controllers/bedController');

// API to get all beds
router.get('/beds', bedController.getAllBeds);

// API to get bed details by bed id
router.get('/bed/:id', bedController.getBedById);

// API for adding a new bed
router.post('/addBed', bedController.addBed);

// API for updating bed details by bed id
router.put('/updateBed/:id', bedController.updateBed);

// API to mark a bed as inactive (delete)
router.put('/deleteBed/:id', bedController.deleteBed);

module.exports = router;