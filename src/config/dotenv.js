require("dotenv").config();
const { PORT, JWT_HASH, MONGO_URL } = process.env;

module.exports = {
  PORT,
  JWT_HASH,
  MONGO_URL,
};
