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
  try {
    const fabric = await Fabric.create({ name });
    return res.status(200).json({ fabric, message: "Insert Successful" });
  } catch (e) {
    if (e.errors) {
      return res.status(500).json({ message: e.errors[0].message });
    }
    return res.status(500).json({ message: e.errors[0].message });
  }
};

exports.deleteFabric = async (req, res) => {
  const id = req.params.id;
  await Fabric.destroy({ where: { id } });
  return res.send(200);
};
