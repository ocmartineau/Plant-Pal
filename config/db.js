//Initialize NPM packages

var mySQL = require("mysql");


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

const SystemPlant = db.define('systemPlant', {
    name: {
        type: Sequelize.STRING
    }
});

const UserPlant = db.define('userPlant', {
    name: {
        type: Sequelize.STRING
    }
});

const ScheduleDay= db.define('scheduleDay', {
    name: {
        type: Sequelize.STRING
    },
});

ScheduleDay.belongsToMany(UserPlant, {through: 'userPlantSchedule'});
UserPlant.belongsToMany(ScheduleDay, {through: 'userPlantSchedule'});



UserPlant.belongsTo(User);

db.sync({
    force: true
}).then(() => {
    module.exports.User = User;
    module.exports.SystemPlant = SystemPlant;
    module.exports.UserPlant = UserPlant;
    module.exports.ScheduleDay = ScheduleDay;
});


// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });

