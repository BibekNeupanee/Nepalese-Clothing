const express = require("express");
const app = express();

const db = require("./models");
require("./relationships").handleRelationships(db);

db.sequelize.sync().then((req) => {
  app.listen(3000, function () {
    console.log("Server Running at port 3000");
  });
});
