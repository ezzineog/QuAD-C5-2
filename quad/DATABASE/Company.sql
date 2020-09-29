DROP DATABASE IF EXISTS company;

CREATE DATABASE company;

USE company;

CREATE TABLE company (
    id int NOT NULL AUTO_INCREMENT,
    Name varchar(25) NOT NULL,
    Email varchar(25) NOT NULL,
    Password varchar(25) NOT NULL,
    JobOffers varchar(25) NOT NULL,
    Location varchar(25) NOT NULL,
    PhoneNumber varchar(25) NOT NULL
)
-- Conenct
-- mysql -u root < Company.sql

INSERT INTO company (id, Name, Email, Password, JobOffers, Location) VALUES (1, 'TEST', 'TEST@GMAIL.COM', 'PWDTEST123', 'NOTHING', 'TUNISIA');


INSERT INTO company (id, Name, Email, Password, JobOffers, Location) VALUES (2, '2TEST', '2TEST@GMAIL.COM', '2PWDTEST123', '2NOTHING', '2TUNISIA');


INSERT INTO company (id, Name, Email, Password, JobOffers, Location) VALUES (3, '3TT', '3-TEST@GMAIL.COM', '3-PWDTEST123', '3-NOTHING', '3-TUNISIA');
