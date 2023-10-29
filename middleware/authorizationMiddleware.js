// authorizationMiddleware.js

const authorize = (allowedRoles) => {
    return (req, res, next) => {
      const user = req.user; // Assuming user information is attached to the request
      if (!user) {
        return res.status(401).json({ error: 'Access denied. User not authenticated.' });
      }
  
      // Check if the user's role is in the allowedRoles array
      if (allowedRoles.includes(user.role)) {
        next(); // User is authorized, proceed to the next middleware or route handler
      } else {
        res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
      }
    };
  };
  
  module.exports = {
    authorize,
  };
  