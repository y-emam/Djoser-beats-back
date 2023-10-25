const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = Schema({
  name: String,
  duration: String,
  likes: Number,
  publishDate: Date,
  plays: Number,
  bpm: Number,
  key: String,
  package: {},
  usageTerms: [String],
  mp3Url: String,
  imageUrl: String,
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
