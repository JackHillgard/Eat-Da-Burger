//Set up mysql connection

var mysql = require("mysql");

var connection = mysql.createConnection(({
	port: 3000,
	host: "localhost",
	user: "root",
	password: "Gizmos11",
	database: "burgers_db"
}));

connection.connect(function(err) {
	if (err) {
	console.error("Error: " +err.stack);
	return;
	}
	console.log("connected as id: " + connection.threadId);
});

module.exports = connection;