const { Storage } = require("@google-cloud/storage");
const fs = require("fs");
const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");

async function driveGiveAccess(targetUserEmail, cartItems) {
  const auth = new GoogleAuth({
    keyFilename: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  // todo: give the user the authorization to open the file

  const service = google.drive({ version: "v3", auth: auth });
  const permissionIds = [];

  const permissions = [
    {
      type: "user",
      role: "reader",
      emailAddress: targetUserEmail,
    },
  ];

  // const result = await service.files.list();
  // return result;

  // try {
  //   cartItems.forEach(async (item) => {
  //     const fileMetaData = {
  //       name: item.songName,
  //       parents: [item.parentFolderUrl],
  //     };

  //     const media = {
  //       mimeType: "audio/mp3",
  //       body: fs.createReadStream(item.songName),
  //     };

  //     const file = await service.files.create({
  //       resource: fileMetaData,
  //       media: media,
  //       fields: "id",
  //     });
  //     console.log("File Id:", file.data.id);
  //   });

  //   return file.data.id;
  // } catch (err) {
  //   // TODO(developer) - Handle error
  //   throw err;
  // }

  for (const permission of permissions) {
    try {
      cartItems.forEach(async (item) => {
        const result = await service.permissions.create({
          resource: permission,
          fileId: fileId,
          fields: "id",
        });
        permissionIds.push(result.data.id);
        console.log(`Inserted permission id: ${result.data.id}`);
      });
    } catch (err) {
      // TODO(developer): Handle failed permissions
      console.error(err);
    }
  }
  return permissionIds;
}

module.exports = driveGiveAccess;
