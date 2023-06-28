exports.handleRelationships = (db) => {

  db.Measurement.belongsTo(db.Fabric, { foreignKey: "fabricId" });

  db.Product.belongsToMany(db.Measurement, { through: db.ProductMeasurement });
  db.Measurement.belongsToMany(db.Product, { through: db.ProductMeasurement });

  db.Product.belongsTo(db.ProductType, { foreignKey: "productTypeid" });

  db.ProductColor.belongsTo(db.Product, { foreignKey: "productId" });

  db.ProductImage.belongsTo(db.Product, { foreignKey: "productId" });

  db.MeasurementDetail.belongsTo(db.Measurement, {
    foreignKey: "measurementId",
  });

  db.MeasurementDetail.belongsTo(db.MeasurementPart, {
    foreignKey: "measurementPartId",
  });
  db.MeasurementDetail.belongsTo(db.Characteristics, {
    foreignKey: "characteristicsId",
  });

};
