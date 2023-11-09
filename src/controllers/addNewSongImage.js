var path = require("path"); //used for file path
var fs = require("fs");

const addNewSongImage = (req, res) => {
  try {
    console.log(req);
    // var fstream;
    // req.pipe(req.busboy);
    // req.busboy.on("file", function (fieldname, file, filename) {
    //   console.log("Uploading: " + filename);

    //   //Path where image will be uploaded
    //   fstream = fs.createWriteStream(__dirname + "/img/" + filename);
    //   file.pipe(fstream);
    //   fstream.on("close", function () {
    //     console.log("Upload Finished of " + filename);
    //     res.redirect("back"); //where to go next
    //   });
    // });

    res.send("done");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = addNewSongImage;
