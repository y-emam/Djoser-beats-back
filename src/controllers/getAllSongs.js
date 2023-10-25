const allSongsService = require("../services/getAllSongs");

const allSongsController = async (req, res) => {
  try {
    const allSongs = await allSongsService();
    if (allSongs) {
      res.send({ songs: allSongs });
    } else {
      res.status(400).send("Failed to fetch songs");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = allSongsController;
