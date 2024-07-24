use express_test;

CREATE TABLE USERS (
  id int(5) NOT NULL AUTO_INCREMENT,
  nickname varchar(20) NOT NULL UNIQUE,
  name varchar(10) NOT NULL
  email varchar(30) NOT NULL UNIQUE,
  password varchar(100) NOT NULL,
  phoneNumber varchar(20) NOT NULL UNIQUE,
  role enum('USER', 'ADMIN', 'MASTER') NOT NULL DEFAULT 'USER',
  profileImage varchar(255) NOT NULL,
  provider enum('EMAIL', 'KAKAOTALK', 'GOOGLE', 'FACEBOOK') NOT NULL DEFAULT 'EMAIL', PRIMARY KEY (`id`)
);

ALTER TABLE USERS ADD COLUMN name varchar(10) NOT NULL;


ALTERE TABLE USERS MODIFY COLUMN password varchar(100) NOT NULL;
ALTER TABLE USERS CHANGE id user_id int(5) NOT NULL AUTO_INCREMENT;