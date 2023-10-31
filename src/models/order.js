const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
  buyerEmail: String,
  totalPrice: Number,
  items: [
    {
      songName: String,
      packageName: String,
      price: Number,
    },
  ],
});

const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;
