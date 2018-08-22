//Initialize NPM packages

var mySQL = require("mysql");


//Initialize connection to MySQL database with variable

var connection = mySQL.createConnection({
    host: "localhost",

    //Port using
    port: 3306,

    //SQL Username
    user: "root",

    //Password
    password: "calyps0",

    //Database to use
    database: "plant_pal",
})


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


//Sequelize

const Sequelize = require('sequelize');
const db = new Sequelize('plant_pal', 'root', 'calyps0', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

db.authenticate()
    .then(() => {
        console.log('Sequelize connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const User = db.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

const systemPlants = db.define('systemPlants', {
    name: {
        type: Sequelize.STRING
    }
});

const userPlants = db.define('userPlants', {
    name: {
        type: Sequelize.STRING
    }
});

userPlants.belongsTo(User);


// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });

module.exports = connection;