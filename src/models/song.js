const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = Schema({
  name: String,
  duration: String,
  likes: Number,
  plays: Number,
  bpm: Number,
  date: Date,
  mp3Url: String,
  imageUrl: String,
  wavUrl: String,
  stemUrl: String,
  licenceUrl: String,
  parentFolderUrl: String,
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
