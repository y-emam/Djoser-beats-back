const { App } = require("./app"); // Replace './app' with the correct relative path

class server {
  constructor() {
    const app = new App();
    app.listen();
  }
}
new server();
