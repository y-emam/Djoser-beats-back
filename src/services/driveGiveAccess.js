const { Storage } = require("@google-cloud/storage");
const fs = require("fs");
const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");
const Song = require("../models/song");

async function driveGiveAccess(targetUserEmail, cartItems) {
  const auth = new GoogleAuth({
    keyFilename: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const service = google.drive({ version: "v3", auth: auth });
  const permissionIds = [];
  let filesUrl = [];

  const permissions = [
    {
      type: "user",
      role: "reader",
      emailAddress: targetUserEmail,
    },
  ];

  for (const permission of permissions) {
    try {
      cartItems.forEach(async (cartItem) => {
        const songPackages = await Song.find({ name: cartItem.songName });

        const getUrlsFromItem = (song) => {
          let temp = [];

          switch (cartItem.packageName) {
            case "Basic License":
              temp.push(song.mp3OrgUrl);
              break;
            case "Standard License":
              temp.push(song.mp3OrgUrl);
              temp.push(song.wavUrl);
              break;
            case "Premium License":
              temp.push(song.mp3OrgUrl);
              temp.push(song.wavUrl);
              temp.push(song.stemUrl);
              break;
            case "Exclusive License":
              temp.push(song.mp3OrgUrl);
              temp.push(song.wavUrl);
              temp.push(song.stemUrl);
              break;
          }

          return temp;
        };

        filesUrl = getUrlsFromItem(songPackages[0]);

        for (let i = 0; i < filesUrl.length; i++) {
          const fileId = filesUrl[i].split("/")[5];

          const result = await service.permissions.create({
            resource: permission,
            fileId: fileId,
            fields: "id",
          });
          permissionIds.push(result.data.id);
          console.log(`Inserted permission id: ${result.data.id}`);
        }

        console.log(filesUrl);
        return filesUrl;
      });
    } catch (err) {
      console.error(err);
    }
  }
  return filesUrl;
}

module.exports = driveGiveAccess;
