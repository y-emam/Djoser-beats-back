const { default: getAudioDurationInSeconds } = require("get-audio-duration");
const Song = require("../models/song");

const addNewSongMongoService = async (songData) => {
  // get the duration of the beat
  const duration = await getAudioDurationInSeconds(songData.mp3Edit);
  console.log(duration);
  const datetime = new Date();

  // hhttps://drive.google.com/uc?id=1IQbuV841m15JeXYje2T7KkoM3qIYYE6k&export=view/

  const newSong = new Song({
    name: songData.name,
    duration: duration,
    likes: 0,
    plays: 0,
    bpm: songData.bpm,
    date: datetime.toString(),
    mp3EditUrl: songData.mp3Edit,
    imageUrl: songData.image,
    mp3OrgUrl: songData.mp3Org,
    wavUrl: songData.wav,
    stemUrl: songData.stem,
    licenceUrl: songData.licence,
    parentFolderUrl: songData.parentFolder,
  });

  console.log(newSong);
  const result = await newSong.save();

  return result;
};

module.exports = addNewSongMongoService;
