module.exports = (sequelize, DataTypes) => {
  const Fabric = sequelize.define(
    "Fabric",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    { tableName: "Fabrics" }
  );

  return Fabric;
};
