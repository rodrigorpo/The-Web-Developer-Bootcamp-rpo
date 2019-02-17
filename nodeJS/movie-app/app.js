const app = require('express')();
const bodyParser = require('body-parser');
const request = require('request');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.render("search");
});

app.get("/results", function (req, res) {
    request('http://omdbapi.com/?s=california&apikey=thewdb', function (error, response, body) {
        if (!error && response.statusCode >= 200 && response.statusCode <= 300) {
            const parsedData = JSON.parse(body);
            res.render("results", {parsedData: parsedData});
        }
    });
});

app.post("/results", function (req, res) {
    request('http://omdbapi.com/?apikey=thewdb&s=' + req.body.movie, function (error, response, body) {
        if (!error && response.statusCode >= 200 && response.statusCode <= 300) {
            const parsedData = JSON.parse(body);
            res.render("results", {parsedData: parsedData});
        }
    });
});

app.listen(3000, function () {
    console.log("Application started!");
});