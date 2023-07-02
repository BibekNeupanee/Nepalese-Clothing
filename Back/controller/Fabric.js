const { Fabric } = require("../models");
exports.getAllFabrics = async (req, res) => {
  const fabric = await Fabric.findAll();
  return res.status(200).json({ fabric });
};
