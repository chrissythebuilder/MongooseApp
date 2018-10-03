var express = require("express");

var exphbrs = require("express-handlebars");
var bodyParser = require("body-parser");
var request = require("request");

var cheerio = require("cheerio");
var axios = require("axios");

var PORT = 3000;

var mongoose = require("mongoose");
app.use(express.static("public"));

// Initialize Express
var app = express();

// JSON parse request body
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// If deployed, use the deployed database. Otherwise use the local host
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Mongoose to leverage built in JS ES6 Promises - Connect to Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)

// scraping theatlantic website articles
app.get("/scrape", function(req, res) {

    axios.get("https://www.huffingtonpost.com/topic/good-news").then(function(response) {
        var $ = cheerio.load(response.data);

        // Gets the Title, Summary, URL, and Photo
        $("article").each(function(i, element) {
            var result = {};

            result.title = $(this)
                .children("a")
                .text();

            result.description = $(this)
                .children("a")
                .attr();
            
            result.link = $(this)
                .children("a")
                .text();

            result.img = $(this)
                .children("a")
                .attr("img");
                
        })
    })
});

app.get("/saved", function(req, res) {

})