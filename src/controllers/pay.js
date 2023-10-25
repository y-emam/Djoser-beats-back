const payService = require("../services/pay");

const payController = (req, res) => {
  try {
    const paymentData = req.data;
    var result = payService();

    if (result === "success") {
      // Save payment details in mongo
      result = payModel();

      if (result === "success") {
        res.send(result);
      } else {
        res.status(400).send(result);
      }
    } else {
      res.status(400).send(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = payController;
