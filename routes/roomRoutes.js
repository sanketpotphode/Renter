const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// API to get all rooms
router.get('/rooms', roomController.getAllRooms);

// API to get room details by room ID
router.get('/rooms/:id', roomController.getRoomById);

// API for adding a new room
router.post('/rooms', roomController.addRoom);

// API for updating room details
router.put('/rooms/:id', roomController.updateRoom);

// API for deleting a room
router.delete('/rooms/:id', roomController.deleteRoom);

module.exports = router;
