const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/dotenv");

const initMongoose = async (options) => {
  const connectionString = MONGO_URL;

  await mongoose.connect(connectionString, options);
};

module.exports = initMongoose;
