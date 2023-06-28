module.exports = (sequelize, DataTypes) => {
  const ProductType = sequelize.define(
    "ProductType",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { tableName: "ProductType" }
  );

  return ProductType;
};
