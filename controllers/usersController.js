//Requiring Express and Router for routes
const express = require("express");
const router = require("express").Router();


//Pulling in the three models to use their database functions
const users = require("../models/users.js");



//USER ROUTES
router.post("/users", function(req, res) {
    if (req.body.username == null || req.body.password == null || req.body.email == null) {
        return (res.status(400).end())
    } else {
        users.create([
                "username", "password", "email"
            ], [
                req.body.username, req.body.password, req.body.email,
            ], function (result) {
                res.json({result});
            }
        );
    }
});

// router.put("/user", function(req, res) {
//     users.update({
//             username: req.body.username,
//             email: req.body.email
//         },
//     )
// });

module.exports = router;
// router.get("/user", function (req, res) {
//
// })
