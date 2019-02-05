const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

let campgrounds = [
    { name: "Salmon Creek", image: "https://souldust.com/wp-content/uploads/2011/05/website_hero_camp16.jpeg" },
    { name: "Granite Hill", image: "https://static1.squarespace.com/static/55ecd96fe4b0cee523072594/t/5734037a4c2f8582b5859ecd/1463026556921/FlashCamp_HR0075.jpg?format=1500w" },
    { name: "Mountain Goat's Rest", image: "https://r-ec.bstatic.com/images/hotel/max1024x768/647/64748006.jpg" },
    { name: "Salmon Creek", image: "https://souldust.com/wp-content/uploads/2011/05/website_hero_camp16.jpeg" },
    { name: "Granite Hill", image: "https://static1.squarespace.com/static/55ecd96fe4b0cee523072594/t/5734037a4c2f8582b5859ecd/1463026556921/FlashCamp_HR0075.jpg?format=1500w" },
    { name: "Mountain Goat's Rest", image: "https://r-ec.bstatic.com/images/hotel/max1024x768/647/64748006.jpg" }
]

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function (req, res) {
    campgrounds.push({ name: req.body.name, image: req.body.img });
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.listen(3000, function () {
    console.log("Application started!");
});