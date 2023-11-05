const addNewSongMongoService = require("../services/addNewSongs");

const addNewSongController = async (req, res) => {
  try {
    const songData = req.body;

    const mongoRes = await addNewSongMongoService(songData);

    if (mongoRes === "success") {
      res.send({ message: "Uploaded Successfully" });
    } else {
      res.send(400).send(mongoRes);
    }
  } catch (err) {
    res.send(500).json(err);
  }
};

module.exports = addNewSongController;
