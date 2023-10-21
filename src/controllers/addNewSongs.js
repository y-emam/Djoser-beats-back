const addNewSongModel = require("../models/addNewSongs");

const addNewSongController = (req, res) => {
  const newSong = req.body;
  const result = addNewSongModel(newSong);
  try {
  } catch (err) {
    res.send(500).json(err);
  }
};

module.exports = addNewSongController;
