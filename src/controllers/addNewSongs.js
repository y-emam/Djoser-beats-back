const {
  addNewSongMongoService,
  addNewSongDriveService,
} = require("../services/addNewSongs");

const addNewSongController = async (req, res) => {
  try {
    const newSong = req.body;

    // Add song to drive
    const driveRes = await addNewSongDriveService(newSong);

    if (driveRes === "success") {
      const mongoRes = await addNewSongMongoService();
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
