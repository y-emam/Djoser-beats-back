const express = require("express");
const getAllSongs = require("../controllers/getAllSongs");
const songDetails = require("../controllers/songDetails");
const orderController = require("../controllers/order");
const addNewSong = require("../controllers/addNewSongs");
const authenticate = require("../middlewares/authentication");
const AdminLogin = require("../controllers/adminLogin");
const addNewSongMP3Edit = require("../controllers/addNewSongMP3Edit");
const addNewSongImage = require("../controllers/addNewSongImage");
const router = express.Router();

router.get("/allSongs", getAllSongs);
router.get("/songDetails", songDetails);
router.post("/createOrder", orderController);
router.post("/adminLogin", AdminLogin);
router.post("/addNewSong", authenticate, addNewSong);
router.post("/addNewSongImage", authenticate, addNewSongImage);
router.post("/addNewSongMP3Edit", authenticate, addNewSongMP3Edit);

router.use((_, res) => {
  res.send("Page not found -_-");
});

module.exports = router;
