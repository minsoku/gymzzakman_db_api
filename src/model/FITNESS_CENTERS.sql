use express_test;

CREATE TABLE FITNESS_CENTERS (
    id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    profileImage VARCHAR(255) NOT NULL,
    shortAddress VARCHAR(50) NOT NULL,
    lat DECIMAL(10, 6) NOT NULL,
    lng DECIMAL(11, 7) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    address VARCHAR(50) NOT NULL UNIQUE,
);