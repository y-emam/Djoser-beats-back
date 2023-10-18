const express = require("express");
const getAllSongs = require("../controllers/getAllSongs");
const songDetails = require("../controllers/songDetails");
const pay = require("../controllers/pay");
const addNewSong = require("../controllers/addNewSongs");
const authenticate = require("../middlewares/authentication");
const router = express.Router();

router.get("/allSongs", getAllSongs);
router.get("/songDetails", songDetails);
router.post("/pay", pay);
router.post("/addNewSong", authenticate, addNewSong);

router.use((_, res) => {
  res.send("Page not found -_-");
});

module.exports = router;
