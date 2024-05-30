CREATE DATABASE the_rick_and_morty;
USE the_rick_and_morty;

CREATE TABLE personajes(
    personajeID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(64) NOT NULL,
    gender ENUM('Male', 'Female'),
    species VARCHAR(32),
    image LONG,
    status ENUM('Alive', 'Dead') 
);

CREATE TABLE personajesFavoritos(
    personajeFavoritoID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    personajeID INT(5) NOT NULL UNIQUE
);

CREATE TABLE chat_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);