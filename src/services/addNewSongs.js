const { default: getAudioDurationInSeconds } = require("get-audio-duration");
const Song = require("../models/song");

const addNewSongMongoService = async (songData) => {
  // edit the links of mp3 and image
  const mp3Url = songData.mp3.split("/");
  songData.mp3 = `https://drive.google.com/uc?id=${mp3Url[mp3Url.length - 2]}`;

  const imageUrl = songData.image.split("/");
  songData.image = `https://drive.google.com/uc?id=${
    imageUrl[imageUrl.length - 2]
  }`;

  // get the duration of the beat
  const duration = await getAudioDurationInSeconds(songData.mp3);

  const datetime = new Date();

  const newSong = new Song({
    name: songData.name,
    duration: duration,
    likes: 0,
    plays: 0,
    bpm: songData.bpm,
    date: datetime.toString(),
    mp3Url: songData.mp3,
    imageUrl: songData.image,
    wavUrl: songData.wav,
    stemUrl: songData.stem,
    licenceUrl: songData.licence,
    parentFolderUrl: songData.parentFolder,
  });

  const result = await newSong.save();

  return result;
};

module.exports = addNewSongMongoService;
