var express = require("express");
var app = express();

var exphbrs = require("express-handlebars");
var bodyParser = require("body-parser");
var request = require("request");

var cheerio = require("cheerio");
var axios = require("axios");

var PORT = 3000;

var mongoose = require("mongoose");
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local host
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Mongoose to leverage built in JS ES6 Promises - Connect to Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)

app.get("/", function(req, res) {

});

app.get("/saved", function(req, res) {

})