//Initialize NPM packages

const express = require ("express");
const bodyParser = require ("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const connection = require("./config/db.js");
// const systemPlantsController = require("./controllers/systemPlantsController");
// const userPlantsController = require("./controllers/userPlantsController");
const usersController = require("./controllers/usersController");

//Setting up the Express application
var app = express();
var PORT = 3000;

// MIDDLEWARE
app.use(morgan('dev'))


// PASSPORT

passport.use(new LocalStrategy(
    function(username, password, done) {
        users.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));


app.use(express.static("public"));
app.use(session({ secret: "cats" }));

app.use(passport.initialize());
app.use(passport.session());



//Adding body-parser middleware to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


//Starting app and connecting to server
app.listen(PORT, function () {
    console.log(`Application is now connected to Port:${PORT} and ready to work!` )
})


//Routes
// app.use(userPlantsController);
// app.use(systemPlantsController);


// require('./controllers/usersController')(app);

console.log(usersController);
app.use(usersController);