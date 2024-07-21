const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ message: 'Access Denied' });
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = await User.findById(verified._id);
    next();
  } catch (error) {
    res.status(400).send({ message: 'Invalid Token' });
  }
};
