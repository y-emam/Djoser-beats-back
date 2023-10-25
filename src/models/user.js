const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: String,
  first: String,
  last: String,
  noPayments: Number,
  // TODO: know data that comes from payment through paypal
});

const User = mongoose.model("Payment", userSchema);

module.exports = User;
