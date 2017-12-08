var connection = require("../config/connection.js");

var orm = {
	selectAll: function(tableInput, callback) {
		var query = "SELECT * FROM ??";
		connection.query(query, [tableInput], function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
			console.log("Select all done");
		});
	},

	insertOne: function(tableInput, colName, vals, callback) {
		var query = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(query, [tableInput, colName, vals], function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},

	updateOne: function(tableInput, colName, newInput, colId, pageId, callback) {
		var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(query, [tableInput, colName, newInput, colId, pageId], function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
			console.log("Update done");
			
		});
	}
};

module.exports = orm;