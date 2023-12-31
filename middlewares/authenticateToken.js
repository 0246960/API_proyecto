
import jwt from 'jsonwebtoken';
import config from '../config.js';
import User from '../models/userModel.js';

const authenticateToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const accessToken = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return res.status(401).json({ message: 'No access token provided' });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while authenticating the access token' });
  }
};

export default authenticateToken;
