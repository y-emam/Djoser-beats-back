const addNewSongMongoService = require("../services/addNewSongs");

const addNewSongController = async (req, res) => {
  try {
    const songData = req.body;

    const mongoRes = await addNewSongMongoService(songData);

    if (mongoRes._id) {
      res.send({ message: "Uploaded Successfully" });
    } else {
      res.status(400).send(mongoRes);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = addNewSongController;
