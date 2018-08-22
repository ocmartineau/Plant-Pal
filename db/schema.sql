Drop database if exists PlantPalDB;
Create database PlantPalDB;

Use PlantPalDB;

drop table if exists SystemPlants;
Create Table SystemPlants(
id INT NOT NULL,
Name VarChar(100),
Schedule VarChar(100),
Primary Key (id)
);

drop table if exists UserPlants;
Create Table UserPlants(
id INT NOT NULL,
Name VarChar(100),
PlantID INT,
Schedule VarChar,
Primary Key (id)
);

drop table if exists Users;
Create Table Users(
id INT NOT NULL,
Username VarChar(100) NULL,
Password VarChar(100) NULL,
Email VarChar(100)
);

select * from SystemPlants;
select * from UserPlants;
select * from Users;