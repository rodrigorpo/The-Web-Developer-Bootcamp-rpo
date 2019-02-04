const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    request('https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&id=2643743&units=metric', function (error, response, body) {
        if (error) {
            console.log("SOMETHING WENT WRONG!");
            console.log(error);
        } else {
            if (response.statusCode == 200) {
                const parsedData = JSON.parse(body);
                res.send(body);
            }
        }
    });
});

// Install body-parser
app.post("/addFriend", function (req, res) {
    friends.push(req.body.newFriend);
    res.redirect("/friends");
});

app.listen(3000, function () {
    console.log("Server started!!!")
});