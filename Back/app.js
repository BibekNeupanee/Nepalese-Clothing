const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.options("*", cors());
app.use(express.json());

module.exports = app;
