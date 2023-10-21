const jwt = require("jsonwebtoken");
const { JWT_HASH } = require("../config/dotenv");

const authenticate = (req, res, next) => {
  try {
    const decoded = jwt.verify(token, JWT_HASH);
    next();
  } catch (err) {
    res.status(403).send("Enta meen ya m3rs");
  }
};

module.exports = authenticate;
