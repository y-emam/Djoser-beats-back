require("dotenv").config();
const { PORT, JWT_HASH } = process.env;

module.exports = {
  PORT,
  JWT_HASH,
};
