//CALLING DEPENDENCIES

const express = require ("express");
const bodyParser = require ("body-parser");
const morgan = require("morgan");
var session = require("express-session");
const LocalStrategy = require('passport-local').Strategy;
const connection = require("./config/db.js");
const usersController = require("./controllers/usersController");

//-----------------------------------------------------------------------------------------------------------



//SETTING UP THE EXPRESS APPLICATION
var app = express();
var PORT = 3000;

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.static("public"));


//PASSPORT
app.use(passport.initialize());
app.use(passport.session());
//sessions being used to keep the logging in state of the user
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);



//Adding body-parser middleware to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


//Routes
// app.use(userPlantsController);
// app.use(systemPlantsController);


// require('./controllers/usersController')(app);
// const systemPlantsController = require("./controllers/systemPlantsController");
// const userPlantsController = require("./controllers/userPlantsController");
// console.log(usersController);
app.use(usersController);

//Starting app and connecting to server
app.listen(PORT, function () {
    console.log(`Application is now connected to Port:${PORT} and ready to work!` )
})
