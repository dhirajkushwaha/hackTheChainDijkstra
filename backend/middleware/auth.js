// backend/middleware/auth.js
const { verifyToken } = require('../utils/jwt');


const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Read token from cookies
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const decoded = verifyToken(token);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;