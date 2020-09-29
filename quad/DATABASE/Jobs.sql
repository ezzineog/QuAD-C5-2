DROP DATABASE IF EXISTS jobs;

CREATE DATABASE jobs;

USE jobs;


CREATE TABLE jobs (
    ID int NOT NULL AUTO_INCREMENT,
    companyId varchar(25),
    JobTitle varchar(25),
    Description varchar(50)
    FOREIGN KEY (ID)
)

-- mysql -u root < Jobs.sql

INSERT INTO jobs (id ,Name,JobTitle,Description) VALUES (1,"companyName","CompanyTitle","789");
INSERT INTO jobs (id ,Name,JobTitle,Description) VALUES (2,"Ezzines company","test","freeelance");
INSERT INTO jobs (id ,Name,JobTitle,Description) VALUES (3,"7851","CompanyTitle","123");