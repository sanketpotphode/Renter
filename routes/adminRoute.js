const express = require('express');
const router = express.Router();
const authorizationMiddleware = require('../middleware/authorizationMiddleware');

// Protect a route with authorization (only "admin" users can access)
router.get('/admin-only-route', authorizationMiddleware.authorize(['admin']), (req, res) => {
  res.json({ message: 'You have access to this admin-only route.' });
});

module.exports = router;
