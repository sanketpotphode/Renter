// middleware/authenticationMiddleware.js
const jwtService = require('../utils/jwtService');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Authentication failed. Token not provided.' });
  }

  try {
    const decoded = jwtService.verifyToken(token);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed. Invalid token.' });
  }
};

module.exports = { authenticateUser };
