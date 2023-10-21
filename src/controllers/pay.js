const payModel = require("../models/pay");

const payController = (req, res) => {
  try {
    const paymentData = req.data;
    const result = payModel();

    if ((result = "success")) {
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = payController;
