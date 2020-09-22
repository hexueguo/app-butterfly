/** @format */
/* eslint-disable no-unused-vars */

var express = require("express");
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  res.render("index", { title: "Express 33344441111" });
});

module.exports = router;
