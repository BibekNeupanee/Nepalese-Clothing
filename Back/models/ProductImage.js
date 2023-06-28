module.exports = (sequelize, DataTypes) => {
    const ProductImage = sequelize.define(
      "ProductImage",
      {
        image: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      },
      { tableName: "ProductImage" }
    );
  
    return ProductImage;
  };
  