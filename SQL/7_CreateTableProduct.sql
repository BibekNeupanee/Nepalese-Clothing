DROP TABLE IF EXISTS Product;
CREATE TABLE Product (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    code VARCHAR (50),
    name VARCHAR(2000),
    design VARCHAR(2000) NOT NULL,
    productTypeId INT,
    description VARCHAR(5000) NOT NULL,
    price BIGINT,
    instruction VARCHAR(5000),
    FOREIGN KEY (productTypeId)
        REFERENCES producttype (id)
);