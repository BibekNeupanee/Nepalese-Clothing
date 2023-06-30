module.exports = (sequelize, DataTypes) => {
  const Characteristics = sequelize.define(
    "Characteristics",
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
    { tableName: "Characteristics" }
  );

  return Characteristics;
};
