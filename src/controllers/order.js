const createOrder = require("../services/createOrder");

const orderController = async (req, res) => {
  try {
    const cartItems = req.body.cartItems;
    const email = req.body.email;

    var result = await createOrder(cartItems, email);
    console.log(result);

    if (result) {
      // result = sendMail();

      if (result) {
        res.send(result);
      } else {
        res.status(400).send(result);
      }
    } else {
      res.status(400).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = orderController;
