const { Storage } = require("@google-cloud/storage");
const fs = require("fs");
const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");

async function driveGiveAccess(
  fileId = "1j1dMxv_NzhwBxBqQOtLA1SikBOVj5tIx",
  targetUserEmail = "yasseremam2002@gmail.com"
) {
  const auth = new GoogleAuth({
    keyFilename: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const service = google.drive({ version: "v3", auth: auth });
  const permissionIds = [];

  const permissions = [
    {
      type: "user",
      role: "reader",
      emailAddress: targetUserEmail,
    },
  ];

  const result = await service.files.list();
  return result;

  //   const fileMetaData = {
  //     name: "fatrat.mp3",
  //     parents: ["1IjUVJp6PqW_KitHs8nB2VagCpqd-WIYX"],
  //   };

  //   const media = {
  //     mimeType: "audio/mp3",
  //     body: fs.createReadStream("fatrat.mp3"),
  //   };

  //   try {
  //     const file = await service.files.create({
  //       resource: fileMetaData,
  //       media: media,
  //       fields: "id",
  //     });
  //     console.log("File Id:", file.data.id);
  //     return file.data.id;
  //   } catch (err) {
  //     // TODO(developer) - Handle error
  //     throw err;
  //   }

  // for (const permission of permissions) {
  //   try {
  //     const result = await service.permissions.create({
  //       resource: permission,
  //       fileId: fileId,
  //       fields: "id",
  //     });
  //     permissionIds.push(result.data.id);
  //     console.log(`Inserted permission id: ${result.data.id}`);
  //   } catch (err) {
  //     // TODO(developer): Handle failed permissions
  //     console.error(err);
  //   }
  // }
  // return permissionIds;
}

module.exports = driveGiveAccess;
