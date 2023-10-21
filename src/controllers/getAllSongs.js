const allSongsModel = require("../models/getAllSongs");

const allSongsController = (req, res) => {
  try {
    const allSongs = allSongsModel();

    res.send({ songs: allSongs });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = allSongsController;
