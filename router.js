/** @format */

var controllers = require("./controller/index");

module.exports = function(app) {
  app.get("/", controllers.index);
  app.get("/users", controllers.users);
};
