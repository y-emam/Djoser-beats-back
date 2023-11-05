var jwt = require("jsonwebtoken");

require("dotenv").config();

const AdminLogin = (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;

  if (email === process.env.ADMIN_EMAIL && pass === process.env.ADMIN_PASS) {
    const token = jwt.sign({ email, pass }, process.env.JWT_HASH);
    res.send({ token });
  } else {
    res.status(401).send({ message: "Wrong Credentials" });
  }
};

module.exports = AdminLogin;
