const express = require("express");
const app = express();

const db = require("./models");
require("./relationships").handleRelationships(db);

const {
  Characteristics,
  Fabric,
  Measurement,
  MeasurementDetail,
  MeasurementPart,
  Product,
  ProductColor,
  ProductImage,
  ProductMeasurement,
  ProductType,
} = require("./models");

app.get("/", async (req, res) => {
  const fabric = await Fabric.findAll();
  return res.status(200).json({ fabric });
});

app.post("/", async (req, res) => {
  await Fabric.update({ name: "Rib" }, { where: { id: 1 } });
  return res.send(200);
});

app.put("/", async (req, res) => {
  await Fabric.create({ name: "Khaddar" });
  return res.send(200);
});

app.delete("/", async (req, res) => {
  await Fabric.destroy({ where: { id: 3 } });
  return res.send(200);
});

db.sequelize.sync().then((req) => {
  app.listen(3000, function () {
    console.log("Server Running at port 3000");
  });
});
