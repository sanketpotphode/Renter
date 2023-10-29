const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// API to get all users
router.get('/users', userController.getAllUsers);

// API to get user details by user id
router.get('/user/:id', userController.getUserById);

// API for adding a new user
router.post('/addUser', userController.addUser);

// API for updating user details
router.put('/updateUser/:id', userController.updateUser);

// API to mark a user as inactive
router.put('/deleteUser/:id', userController.deleteUser);

module.exports = router;
