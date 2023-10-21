const allSongsModel = require("../models/getAllSongs");

const allSongsController = (req, res) => {
  try {
    // TODO: get all songs from the database
    const allSongs = allSongsModel();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = allSongsController;
