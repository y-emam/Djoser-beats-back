const createOrder = require("../services/createOrder");
const driveGiveAccess = require("../services/driveGiveAccess");
const sendMail = require("../services/sendMail");

require("dotenv").config();

const orderController = async (req, res) => {
  try {
    const cartItems = req.body.cartItems;
    const clientEmail = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const countryCode = req.body.countryCode;

    // todo: fix the comments

    // create order in mongo
    createOrder(cartItems, clientEmail);
    const addUserRes = await addUser(
      clientEmail,
      firstName,
      lastName,
      countryCode
    );
    console.log(addUserRes);

    // send emails to owner and developer
    sendMail.sendMailToOwner(process.env.OWNER_MAIL, clientEmail, cartItems);

    // send email to client
    sendMail.sendMailToClient(clientEmail, links, cartItems);

    // give access to user for the drive
    const result = await driveGiveAccess(cartItems, clientEmail);

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
