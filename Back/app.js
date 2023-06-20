// require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
var cors = require("cors");

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const product = require("./routes/product");

app.use("/", product);

app.listen(3000, function () {
  console.log("Server Running at port 3000");
});
