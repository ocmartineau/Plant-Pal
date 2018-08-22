//Requiring Express and Router for routes
var express = require("express");
var router = express.router();


//Pulling in the three models to use their database functions
var systemPlants = require("../models/systemPlants");