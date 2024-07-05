use express_test;

CREATE TABLE USERS (
  id int(5) NOT NULL AUTO_INCREMENT,
  nickname varchar(20) NOT NULL UNIQUE,
  email varchar(30) NOT NULL UNIQUE,
  password varchar(16) NOT NULL,
  phoneNumber varchar(20) NOT NULL UNIQUE,
  role enum('USER', 'ADMIN', 'MASTER') NOT NULL DEFAULT 'USER',
  profileImage varchar(255) NOT NULL,
  provider enum('EMAIL', 'KAKAOTALK', 'GOOGLE', 'FACEBOOK') NOT NULL DEFAULT 'EMAIL', PRIMARY KEY (`id`)
);
