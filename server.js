
const { ConnectDB } = require("./config/DBManager.js");

var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;

console.log('listening');

ConnectDB();
