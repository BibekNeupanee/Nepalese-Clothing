DROP TABLE IF EXISTS Measurement;
CREATE TABLE Measurement (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(2000),
    fabricId INT NOT NULL,
    linning Boolean,
    gender VARCHAR (50),
    FOREIGN KEY (fabricId)
        REFERENCES fabric (id)
);