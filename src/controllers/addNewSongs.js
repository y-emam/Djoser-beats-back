const addNewSongModel = require("../models/addNewSongs");

const addNewSongController = async (req, res) => {
  try {
    const newSong = req.body;

    // Add song to drive
    const driveRes = await addNewSongModel.addNewSongDriveModel(newSong);

    if (driveRes === "success") {
      // Add song's data to mongodb
      const mongoRes = await addNewSongModel.addNewSongMongoModel();
      if (mongoRes === "success") {
        res.send({ message: "Uploaded Successfully" });
      } else {
        res.send(400).send(mongoRes);
      }
    } else {
      res.send(400).send(driveRes);
    }
  } catch (err) {
    res.send(500).json(err);
  }
};

module.exports = addNewSongController;
