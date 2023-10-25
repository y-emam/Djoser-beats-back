const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = Schema({
  name: String,
  duration: {
    minutes: Number,
    seconds: Number,
  },
  likes: Number,
  publishDate: Date,
  plays: Number,
  bpm: Number,
  key: String,
  package: {},
  usageTerms: [String],
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
