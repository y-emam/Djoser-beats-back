const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/dotenv");
const router = require("./routes");

require("dotenv").config();

class App {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.initializeMiddlewares();
    this.app.use("", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("=================================");
      console.log(`🚀 App is listening on the port: ${this.port}`);
      console.log(`🚀 Use This link: http://localhost:${this.port}`);
      console.log("=================================");
    });
  }

  initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
}

module.exports = { App };
