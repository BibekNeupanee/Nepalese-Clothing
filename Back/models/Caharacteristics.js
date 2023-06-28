module.exports = (sequelize, DataTypes) => {
    const Characteristics = sequelize.define(
      "Characteristics",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      },
      { tableName: "Characteristics" }
    );
  
    return Characteristics;
  };
  