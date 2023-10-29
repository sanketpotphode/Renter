const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

// Protect a route with authentication
router.get('/protected-route', authenticationMiddleware.authenticateUser, (req, res) => {
  res.json({ message: 'You have access to this protected route.' });
});

module.exports = router;
