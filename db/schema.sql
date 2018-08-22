Drop database if exists plant_pal;
Create database plant_pal;

Use plant_pal;

drop table if exists system_plants;
Create Table system_plants(
id INT NOT NULL,
Name VarChar(100),
Schedule VarChar(100),
Primary Key (id)
);

drop table if exists user_plants;
Create Table user_plants(
id INT NOT NULL,
Name VarChar(100),
PlantID INT,
Schedule VarChar,
Primary Key (id)
);

drop table if exists users;
Create Table users(
id INT NOT NULL,
Username VarChar(100) NULL,
Password VarChar(100) NULL,
Email VarChar(100)
);

