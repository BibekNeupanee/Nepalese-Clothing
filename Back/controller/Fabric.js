const { Fabric } = require("../models");
exports.getAllFabrics = async (req, res) => {
  const fabric = await Fabric.findAll();
  return res.status(200).json({ fabric });
};
exports.insertFabric = async (req, res) => {
  const { name } = req.body;
  const fabric = await Fabric.create({ name });
  console.log(fabric);
  return res.status(200).json({ fabric });
};
