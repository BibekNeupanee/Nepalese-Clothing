require("dotenv").config();

const app = require("./app");
const port = process.env.PORT;
const db = require("./models");

const fabricRouter = require("./routes/Fabric");
require("./relationships").handleRelationships(db);

app.use("/fabric", fabricRouter);

db.sequelize.sync().then((req) => {
  app.listen(port, function () {
    console.log("Server Running at port" + port);
  });
});
