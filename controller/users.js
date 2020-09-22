/** @format */
/* eslint-disable no-unused-vars */

var express = require("express");
var router = express.Router();

router.use(function(req, res, next) {
  res.render("users", { users: "hello ,users 111" });
});

module.exports = router;
