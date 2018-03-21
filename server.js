// Dependencies
const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const request = require('request');

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var url = 'mongodb://localhost:3000';
var PORT = 3000;

// Initialize Express
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Mongojs configuration
var databaseUrl = "mongoHeadlines";
var collections = ["articles"];

// // Scrape Request ---------------------
// request('https://www.nytimes.com/', function (error, response, html) {
//     // Load the HTML into cheerio and save it to a variable
//     // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//     var $ = cheerio.load(html);
//     var results = [];
//     $('h1.AssetHeadline-headline').each(function (i, element) {
//         var title = $(element).text();
//         var link = $(element).children().attr('href');
//         results.push({
//             title: title,
//             link: link
//         });
//     });
//     console.log(results);
// });


// ROUTES --------------------------------

// Home page route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

// Route for getting all Articles from the db
app.get("/articles", function(req, res) {
    // Grab every document in the Articles collection
    db.mongoHeadlines.find({})
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });



// CLICK EVENTS --------------------------------------
// // Click event to add an article to the db
// $("save-article").on("click", function () {
//     $.ajax({
//             type: "POST",
//             url: "/submit",
//             dataType: "json",
//             data: {
//                 title: $("#title").val(),
//                 author: $("#author").val(),
//                 created: Date.now()
//             }
//         })
//         .then(function (data) {
//             console.log(data);
//             getUnread();
//             $("#author").val("");
//             $("#title").val("");
//         });
//     return false;
// });



// Listen on port 3000
app.listen(3000, function () {
    console.log("App running on port " + PORT);
});