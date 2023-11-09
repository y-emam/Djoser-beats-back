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
const sendMailToClient = async (recieverEmail, links, cartItems) => {
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
      html: `<div>
        <h2>Get Your Beats from the Following Links</h2>
        <p>Thank you for choosing our beats to elevate your music! We're thrilled to have you as a part of our creative community. 
        Your purchase includes the links to download your high-quality beats below. We hope these beats inspire and enhance your music projects. 
        If you ever need assistance or have any questions, feel free to reach out to us. Enjoy the beats, and let your creativity flow!</p>
        <a href="${links}" style="color: black; background-color: grey; margin: 10px auto; display:block; width: 5rem; text-align: center; font-weight: bold; padding: 4px 8px;">Downlaod</a>
      </div>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    //
  }

  await send().catch(console.error);
};

module.exports = { sendMailToOwner, sendMailToClient };
