const allSongsService = require("../services/getAllSongs");

const allSongsController = (req, res) => {
  try {
    const allSongs = allSongsService();

    res.send({ songs: allSongs });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = allSongsController;
