DROP DATABASE IF EXISTS users;

CREATE DATABASE users;

USE users;

CREATE TABLE users (
    ID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(20),
    LastName varchar(20),
    Age int NOT NULL,
    Avatar varchar(255),
    Email varchar(20),
    Password varchar(50),
    Description varchar(100),
    PhoneNumber int,
    Skills varchar(60),
    FOREIGN KEY (ID)
)

-- to create the this DATABASE IN YOUR MYSQL DATABASE GUYS
-- copy this in the terminal mysql
-- mysql -u root < Users.sql

INSERT INTO users (ID, date, FirstName, LastName, Age) VALUES (1, "Ahmed Taha", "Ezzine", 17,"srcImageLink","ezzineahmedtaha@gmail.com","QuiteBDeadly","theSamaAsThaPassword",2525753,"JobLess","Skills");
INSERT INTO users (ID, date, FirstName, LastName, Age) VALUES (2, "test", "Ezzine", 17,"srcImageLink","ezzineahmedtaha@gmail.com","QuiteBDeadly","theSamaAsThaPassword",2525753,"JobLess","Skills");
INSERT INTO users (ID, date, FirstName, LastName, Age) VALUES (3, "taha", "Ezzine", 17,"srcImageLink","ezzineahmedtaha@gmail.com","QuiteBDeadly","theSamaAsThaPassword",2525753,"JobLess","Skills");