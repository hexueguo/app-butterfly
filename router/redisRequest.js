/** @format */
/* eslint-disable no-unused-vars */

const { redis } = require("../services/index");
const { getValue, setValue } = redis;

module.exports = function(app) {
  // 测试请求
  app.get("/api/redisTest", (req, res) => {
    getValue("1234").then((value) => {
      res.json(value);
    });
  });

  // 存储
  app.post("/api/save/value", (req, res) => {
    setValue().then(() => {});
  });

  // 获取
  app.get("/api/get/value", (req, res) => {
    getValue().then(() => {});
  });
};
