const jwt = require("jsonwebtoken");
const { JWT_HASH } = require("../config/dotenv");

const authenticate = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_HASH);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = authenticate;
