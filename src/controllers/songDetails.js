const songDetailsModel = require("../models/songDetails");

const songDetailsController = (req, res) => {
  try {
    const songData = songDetailsModel();

    res.send(songData);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = songDetailsController;
