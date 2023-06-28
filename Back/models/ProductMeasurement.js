module.exports = (sequelize, DataTypes) => {
  const ProductMeasurement = sequelize.define(
    "ProductMeasurement",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { tableName: "ProductMeasurement" }
  );

  return ProductMeasurement;
};
