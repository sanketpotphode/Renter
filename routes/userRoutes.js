const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

// Public API to register a new user
router.post('/register', userController.registerUser);

// Public API for user login
router.post('/login', userController.loginUser);

// // Protected routes below this line require authentication
// router.use(authenticationMiddleware.authenticateUser);

// Protected API to get all users
router.get('/users', userController.getAllUsers);

// Protected API to get a user by user id
router.get('/user/:id', userController.getUserById);

// Protected API to add a new user
router.post('/addUser', userController.addUser);

// Protected API to update user details
router.put('/updateUser/:id', userController.updateUser);

// Protected API to delete users by updating status
router.put('/deleteUser/:id', userController.deleteUser);

module.exports = router;
