//Initialize NPM packages
var Sequelize = require('sequelize');
var db = new Sequelize('plant_pal', 'root', 'calyps0', {
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


var User = db.define('User', {
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

var SystemPlant = db.define('systemPlant', {
    name: {
        type: Sequelize.STRING
    }
});

var UserPlant = db.define('userPlant', {
    name: {
        type: Sequelize.STRING
    }
});

var ScheduleDay= db.define('scheduleDay', {
    name: {
        type: Sequelize.STRING
    },
});

ScheduleDay.belongsToMany(UserPlant, {through: 'userPlantSchedule'});
UserPlant.belongsToMany(ScheduleDay, {through: 'userPlantSchedule'});



UserPlant.belongsTo(User);

// db.sync({
//     force: true
//
// }).then(() => {
    module.exports = {
        'User' : User,
        'UserPlant': UserPlant
    };
// });


// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });

