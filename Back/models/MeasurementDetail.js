module.exports = (sequelize, DataTypes) => {
  const MeasurementDetail = sequelize.define(
    "MeasurementDetail",
    {
      value: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { tableName: "MeasurementDetail" }
  );

  return MeasurementDetail;
};
