const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env; // Secret key for JWT, loaded from environment variables

// Middleware to verify and authenticate a user with a JWT
const authenticateUser = (req, res, next) => {
  const token = req.header('x-auth-token'); // Extract the JWT token from the request header

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verify and decode the token
    req.user = decoded; // Attach the user information to the request
    next(); // Proceed to the next middleware or route
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};

module.exports = {
  authenticateUser,
};
