const { Fabric } = require("../models");
const { Op } = require("sequelize");

exports.getAllFabrics = async (req, res) => {
  const fabric = await Fabric.findAll();
  return res.status(200).json({ fabric });
};

exports.searchFabrics = async (req, res) => {
  const fabric = await Fabric.findAll({
    where: { name: { [Op.like]: `%${req.params.query}%` } },
  });
  return res.status(200).json({ fabric });
};

exports.insertFabric = async (req, res) => {
  const { name } = req.body;
  const fabric = await Fabric.create({ name });
  console.log(fabric);
  return res.status(200).json({ fabric });
};
