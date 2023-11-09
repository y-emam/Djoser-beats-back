const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = Schema({
  name: String,
  duration: String,
  likes: Number,
  plays: Number,
  bpm: Number,
  date: Date,
  mp3EditUrl: String,
  imageUrl: String,
  mp3OrgUrl: String, // org stands for original
  wavUrl: String,
  stemUrl: String,
  licenceUrl: String,
  parentFolderUrl: String,
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
