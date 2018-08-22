//Requiring Express and Router for routes
var express = require("express");
var router = express.router();


//Pulling in the three models to use their database functions
var systemPlants = require("../models/systemPlants");
var userPlants = require("../models/userPlants");
var users = require("../models/users");


//-------------------------API ROUTES-------------------------------------

//systemPlants Routes







//USERPLANTS ROUTES








//USER ROUTES
router.post("/users", function(req, res) {
    users.create([
            "username", "password", "email"
        ],[
            req.body.username, req.body.password, req.body.email,
        ], function(result) {
            res.json({result});
        }
    );

});

router.put("/user", function(req, res) {
    users.update({
        username: req.body.username,
        email: req.body.email
    },
    )
})

//Need to add users.auth for passport,




