var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});


router.post("/", function(req, res) {
	burger.newBurger([
		req.body.burger
		], function() {
			res.redirect("/");
		});
});


router.put("/:id", function(req, res) {
	burger.eaten(
		req.body.devoured, req.params.id, function() {
			res.redirec("/");
		});
});


module.exports = router;