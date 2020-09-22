/** @format */

var welcome = require("./welcome");
var users = require("./users");

var controller = {};
controller.index = welcome;
controller.users = users;

module.exports = controller;
