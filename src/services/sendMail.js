var nodemailer = require("nodemailer");

require("dotenv").config();

const sendMailToOwner = async (recieverEmail, clientEmail, orderData) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.SENDER_PASS,
    },
  });

  async function send() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: {
        name: "Djoser Beats",
        address: process.env.SENDER_MAIL,
      },
      to: recieverEmail, // list of receivers
      subject: "Yasta 7d e4tra beat 🤑", // Subject line
      text: `
      El Mail bta3oh:
       ${clientEmail}

      ----------------------------
       El data bta3toh: 
      ${orderData}

      A7la mesa 3lek
      `, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    //
  }

  await send().catch(console.error);
};

// todo: make it a prfessional email page
// todo: add link from which he can download files
const sendMailToClient = async (recieverEmail, orderData) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_MAIL,
      pass: process.env.SENDER_PASS,
    },
  });

  async function send() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: {
        name: "Djoser Beats",
        address: process.env.SENDER_MAIL,
      },
      to: recieverEmail, // list of receivers
      subject: "Download Your Beats Now", // Subject line
      text: `
      Your Purchases
      ${orderData}
      `, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    //
  }

  await send().catch(console.error);
};

module.exports = { sendMailToOwner, sendMailToClient };
