const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = Schema({
  userEmail: String,
  songName: String,
  totalPrice: Number,
  totalRevenue: Number,
  filesBought: [String],
  // TODO: Data retured from paypal payment
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
