//dependency needed for route handling
var path = require("path");

module.exports = function (app) {
	//displays homepage
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
	//displays survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});
	//if no valid path is entered, route to homepage as default
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
}