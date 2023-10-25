const songDetailsService = require("../services/songDetails");

const songDetailsController = (req, res) => {
  try {
    const songData = songDetailsService();

    res.send(songData);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = songDetailsController;
