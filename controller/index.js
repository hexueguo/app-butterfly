/** @format */

var welcome = require('./welcome');
var users = require('./users');

const controller = {};

controller.index = welcome;
controller.users = users;

module.exports = controller;
