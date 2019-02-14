// === Default imports ===
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// === Openning connection to mongoose ===
require('./configuration/mongoose-connection');

// === Importing models ===
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const seedDB = require('./configuration/seeds');

// Configuring Express
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.static(__dirname + "/public")); // referes where the script is running

seedDB();

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    Campground.find({}, function (err, campgrounds) {
        if (!err && campgrounds) {
            res.render("campgrounds/index", { campgrounds: campgrounds });
        }
    });
    // res.render("campgrounds", { campgrounds: campgrounds_mocks });
});

app.post("/campgrounds", function (req, res) {
    Campground.create({ name: req.body.name, image: req.body.img, description: req.body.description }, function (err, campground) {
        if (!err && campground) {
            res.redirect("campgrounds/index");
        }
    })
});

app.get("/campgrounds/new", function (req, res) {
    res.render("campgrounds/new");
});

app.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, campground) {
        if (!err && campground) {
            res.render("campgrounds/show", { campground: campground });
        }
    });
});

app.get("/campgrounds/:id/comments/new", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, campground) {
        if (!err && campground) {
            res.render("comments/new", { campground: campground });
        }
    });
});

app.post("/campgrounds/:id/comments/", function (req, res) {
    Comment.create({ author: req.body.author, text: req.body.text }, function (err, comment) {
        if (!err && comment) {
            Campground.findById(req.params.id, function (err, campground) {
                if (!err && campground) {
                    campground.comments.push(comment._id);
                    campground.save(function (err, data) {
                        if (!err && data) {
                            res.redirect("/campgrounds/" + campground._id);
                        }
                    });
                }
            });
        };
    });
})

app.listen(3000, function () {
    console.log("Application started!");
});