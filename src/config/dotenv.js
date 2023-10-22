require("dotenv").config();
const { PORT, JWT_HASH, MONGO_USER, MONGO_PASS } = process.env;

module.exports = {
  PORT,
  JWT_HASH,
  MONGO_USER,
  MONGO_PASS,
};
