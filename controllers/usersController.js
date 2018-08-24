// var Sequelize = require('sequelize');
var router = require("express").Router();
const User = require("../config/db").User;
// var User = db.User;







//USER ROUTES
router.post("/users", function(req, res) {
    if (req.body.username == null || req.body.password == null || req.body.email == null) {
        return (res.status(400).end())
    } else {
        User.create({
            "username": req.body.username,
            "password": req.body.password,
            "email": req.body.email
        }).then(
            function (result) {
                res.json({result});
            }
        );
    }
});

router.post("/users", function(req, res) {
    if (req.body.username == null || req.body.password == null || req.body.email == null) {
        return (res.status(400).end())
    } else {
        User.create({
            "username": req.body.username,
            "password": req.body.password,
            "email": req.body.email
        }).then(
            function (result) {
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

