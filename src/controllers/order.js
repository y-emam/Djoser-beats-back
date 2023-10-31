const createOrder = require("../services/createOrder");
const sendMail = require("../services/sendMail");

require("dotenv").config();

const orderController = async (req, res) => {
  try {
    const cartItems = req.body.cartItems;
    const clientEmail = req.body.email;

    var result = await createOrder(cartItems, clientEmail);
    console.log(result);

    console.log(process.env.OWNER_MAIL);
    console.log(process.env.DEVELOPER_MAIL);

    sendMail.sendMailToOwner(process.env.OWNER_MAIL, clientEmail, cartItems);
    sendMail.sendMailToOwner(
      process.env.DEVELOPER_MAIL,
      clientEmail,
      cartItems
    );
    sendMail.sendMailToClient(clientEmail, cartItems);

    if (result) {
      res.send(result);
    } else {
      res.status(400).send(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = orderController;
