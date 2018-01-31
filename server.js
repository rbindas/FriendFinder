//dependencies needed for app
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT || 3000;

//starter code for express
var app = express();

//starter code for body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//==============================================================
//routes for api and html
// app.use(express.static(path.join(__dirname, 'data')));
require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)

//server listening
//==============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});