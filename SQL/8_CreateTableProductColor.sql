DROP TABLE IF EXISTS ProductColors;
CREATE TABLE ProductColors (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(2000),
    productId INT,
    FOREIGN KEY (productId)
        REFERENCES product (id)
);