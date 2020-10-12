/** @format */

var controllers = require("../controller/index");
const redisRequest = require("./redisRequest");

module.exports = function(app) {
  app.get("/", controllers.index);
  app.get("/users", controllers.users);
  redisRequest(app);
  app.get("/request/indexs", (req, res) => {
    res.json({ id: "1111" });
  });
};
