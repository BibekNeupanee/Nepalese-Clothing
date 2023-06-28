module.exports = (sequelize, DataTypes) => {
  const MeashurementPart = sequelize.define(
    "MeasurementPart",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { tableName: "MeasurementParts" }
  );

  return MeashurementPart;
};
