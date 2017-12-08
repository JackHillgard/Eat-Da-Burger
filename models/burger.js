var orm = require("../config/orm.js");

var burger = {
	all: function(callback) {
		orm.selectAll("burgers", function(result) {
			callback(result);
		});
	},

	newBurger: function(vals, callback) {
		orm.insertOne("burgers", "burger_name", vals, function(result) {
			callback(result);
		});
	},

	eaten: function(newInput, pageId, callback) {
		orm.updateOne("burgers", "devoured", newInput, "id", pageId, function(result) {
			callback(result);
		});
	}
};

module.exports = burger;