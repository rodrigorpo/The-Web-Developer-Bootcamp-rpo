const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    mongoose = require('mongoose');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// === MONGOOSE CONFIGURATION ===
const connectPath = "mongodb://192.168.99.100:27017";
const DATABASE = "yelp_camp";
mongoose.connect(`${connectPath}/${DATABASE}`);

// SCHEMA SETUP
const campgroundsSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

const Campground = mongoose.model("Campground", campgroundsSchema);

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, campgrounds) {
        if (!err && campgrounds) {
            res.render("campgrounds", { campgrounds: campgrounds });
        }
    });
    // res.render("campgrounds", { campgrounds: campgrounds_mocks });
});

app.post("/campgrounds", function (req, res) {
    Campground.create({ name: req.body.name, image: req.body.img, description: req.body.description }, function (err, campground) {
        if (!err && campground) {
            res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (!err && campground) {
            res.render("show", { campground: campground });
        }
    });
});

app.listen(3000, function () {
    console.log("Application started!");
});