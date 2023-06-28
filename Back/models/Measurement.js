const Fabric = require("./Fabric");

module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define(
    "Measurement",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      linning: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { tableName: "Measurement" }
  );

  return Measurement;
};
