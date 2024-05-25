CREATE DATABASE the_rick_and_morty;
USE the_rick_and_morty;

CREATE TABLE personajes(
    personajeID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(64) NOT NULL,
    gender ENUM('Male', 'Female'),
    species VARCHAR(32),
    image VARCHAR(255),
    status ENUM('Alive', 'Dead') 
);

CREATE TABLE personajesFavoritos(
    personajeFavoritoID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    personajeID INT(5) NOT NULL UNIQUE
);