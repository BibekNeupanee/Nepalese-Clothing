DROP TABLE IF EXISTS MeasurementDetail;
CREATE TABLE MeasurementDetail (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    measurementId INT,
    measurementPartId INT,
    value FLOAT,
    characteristicsId INT,
    FOREIGN KEY (measurementId)
        REFERENCES measurement (id),
    FOREIGN KEY (measurementPartId)
        REFERENCES measurementpart (id),
    FOREIGN KEY (characteristicsId)
        REFERENCES characteristics(id)
);