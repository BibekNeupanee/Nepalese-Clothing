const { Fabric } = require("../models");
exports.getAllFabrics = async (req, res) => {
  const fabric = await Fabric.findAll();
  return res.status(200).json({ fabric });
};
exports.insertFabric = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const fabric = Fabric.create({ name });
  return res.status(200).json({ fabric });
};
