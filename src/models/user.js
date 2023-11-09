const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: String,
  firstName: String,
  lastName: String,
  countryCode: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
