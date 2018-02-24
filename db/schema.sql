CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
	id INTEGER(11) auto_increment NOT NULL,
    burger_name VARCHAR(100) NULL,
    devoured BOOLEAN DEFAULT false,
    orderDate datetime NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
	);