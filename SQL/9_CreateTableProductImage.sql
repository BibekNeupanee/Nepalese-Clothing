DROP TABLE IF EXISTS ProductImage;
CREATE TABLE ProductImage (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    image VARCHAR(5000),
    productId INT NOT NULL,
    FOREIGN KEY (productId)
        REFERENCES productcolors (id)
);