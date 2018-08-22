//Initialize NPM packages

var express = require ("express");
var bodyParser = require ("body-parser");
var connection = require("./config/connection.js");

//Setting up the Express application
var app = express();
var PORT = 3000;

//Adding body-parser middleware to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


//Starting app and connecting to server
app.listen(PORT, function () {
    console.log(`Application is now connected to Port:${PORT} and ready to work!` )
})
