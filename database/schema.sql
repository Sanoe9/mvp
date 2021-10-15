-- CREATE DATABASE newborn;

USE newborn;

CREATE TABLE types (
  id INT NOT NULL AUTO_INCREMENT,
  activity VARCHAR(20),
  primary key (id)
);

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  type_id INT,
  note VARCHAR(20),
  time VARCHAR(200),
  primary key (id),
  foreign key (type_id) references types(id)
);


INSERT INTO types (id, activity) VALUES (1, 'feedings'), (2, 'naps'), (3, 'diapers');