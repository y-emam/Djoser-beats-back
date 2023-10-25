const Song = require("../models/song");

const allSongsService = async () => {
  try {
    const data = await Song.find();
    console.log(data);
    return data;
  } catch (err) {
    console.log(`Error getting songs from Mongoose: ${err}`);
  }
};

module.exports = allSongsService;
