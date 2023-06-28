module.exports = (sequelize, DataTypes) => {
  const Fabric = sequelize.define(
    "Fabric",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { tableName: "Fabrics" }
  );

  return Fabric;
};
