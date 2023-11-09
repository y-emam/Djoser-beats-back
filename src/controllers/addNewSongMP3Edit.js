const addNewSongMP3Edit = (req, res) => {
  try {
    const mp3File = req.body;

    console.log("====================================");
    console.log(mp3File);
    console.log("====================================");
    res.send("done");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = addNewSongMP3Edit;
