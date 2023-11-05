const express = require("express");
const getAllSongs = require("../controllers/getAllSongs");
const songDetails = require("../controllers/songDetails");
const orderController = require("../controllers/order");
const addNewSong = require("../controllers/addNewSongs");
const authenticate = require("../middlewares/authentication");
const AdminLogin = require("../controllers/adminLogin");
const router = express.Router();

router.get("/allSongs", getAllSongs);
router.get("/songDetails", songDetails);
router.post("/createOrder", orderController);
router.post("/adminLogin", AdminLogin);
router.post("/addNewSong", authenticate, addNewSong);

router.use((_, res) => {
  res.send("Page not found -_-");
});

module.exports = router;
