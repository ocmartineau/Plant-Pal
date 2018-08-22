//Initialize NPM packages

var mySQL = require ("mysql");


//Initialize connection to MySQL database with variable

var connection = mySQL.createConnection({
    host: "localhost",

    //Port using
    port: 3306,

    //SQL Username
    user: "root",

    //Password
    password: "calyps0",

    //Database to use
    database: "plant_pal",
})



connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;