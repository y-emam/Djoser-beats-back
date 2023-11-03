const createOrder = require("../services/createOrder");
const driveGiveAccess = require("../services/driveGiveAccess");
const sendMail = require("../services/sendMail");

require("dotenv").config();

const orderController = async (req, res) => {
  try {
    const cartItems = req.body.cartItems;
    const clientEmail = req.body.email;

    // Todo: uncomment the following lines
    // var result = await createOrder(cartItems, clientEmail);

    // sendMail.sendMailToOwner(process.env.OWNER_MAIL, clientEmail, cartItems);
    // sendMail.sendMailToOwner(
    //   process.env.DEVELOPER_MAIL,
    //   clientEmail,
    //   cartItems
    // );

    // sendMail.sendMailToClient(clientEmail, cartItems);

    // todo: give user access to the files
    const result = await driveGiveAccess(cartItems, clientEmail);
    console.log("====================================");
    console.log(result);
    console.log("====================================");
    res.send(result);
    return;

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
