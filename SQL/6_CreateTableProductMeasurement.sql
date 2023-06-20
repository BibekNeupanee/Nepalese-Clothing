DROP TABLE IF EXISTS ProductMeasurement;
CREATE TABLE ProductMeasurement (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(2000),
    measurementId INT NOT NULL,
    productTypeId INT NOT NULL,
    FOREIGN KEY (measurementId)
        REFERENCES measurement (id),
    FOREIGN KEY (ProductTypeId)
        REFERENCES producttype (id)
);