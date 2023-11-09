const addUser = require("../services/addUser");
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

    // create order in mongo
    createOrder(cartItems, clientEmail);
    await addUser(clientEmail, firstName, lastName, countryCode);

    // send emails to owner and developer
    sendMail.sendMailToOwner(process.env.OWNER_MAIL, clientEmail, cartItems);

    // send email to client
    sendMail.sendMailToClient(clientEmail, links, cartItems);

    // give access to user for the drive
    const result = await driveGiveAccess(clientEmail, cartItems);

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
