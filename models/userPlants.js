// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var userPlants = {
    all: function(cb) {
        orm.all("userPlants", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create("userPlants", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("userPlants", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("userPlants", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (userPlantsController.js).
module.exports = userPlants;
