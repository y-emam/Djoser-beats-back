const Orders = require("../models/order");

const createOrder = async (cartItems, email) => {
  try {
    let totalPrice = 0;
    cartItems.forEach((item) => (totalPrice += item.price));

    const newOrder = new Orders({
      buyerEmail: email,
      totalPrice: totalPrice,
      items: [...cartItems],
    });

    return await newOrder.save();
  } catch (err) {
    console.log(`Error creating a new Order: ${err}`);
  }
};

module.exports = createOrder;
