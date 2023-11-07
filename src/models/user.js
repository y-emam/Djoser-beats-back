const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: String,
  first: String,
  last: String,
  noPayments: Number,
  countryCode: String,
});

const User = mongoose.model("Payment", userSchema);

module.exports = User;
