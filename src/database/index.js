const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASS } = require("../config/dotenv");

const initMongoose = (options) => {
  const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.owlzabt.mongodb.net/`;

  mongoose
    .connect(connectionString, options)
    .then(() => console.log("Connected to DB successfully"))
    .catch((err) => console.log(`Faile to Connect to DB: ${err}`));
};

module.exports = initMongoose;
