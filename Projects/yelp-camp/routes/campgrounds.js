const express = require("express"),
    router = express.Router(),
    Campground = require('../models/campground');

// Show all campgrounds
router.get("/", function (req, res) {
    Campground.find({}, function (err, campgrounds) {
        if (!err && campgrounds) {
            res.render("campgrounds/index", { campgrounds: campgrounds });
        }
    });
    // res.render("campgrounds", { campgrounds: campgrounds_mocks });
});

// Add campground view
router.get("/new", function (req, res) {
    res.render("campgrounds/new");
});

// Create campground
router.post("/campgrounds", function (req, res) {
    req.user
    Campground.create({ name: req.body.name, image: req.body.img, description: req.body.description }, function (err, campground) {
        if (!err && campground) {
            res.redirect("campgrounds/index");
        }
    })
});

// Show campground specific view
router.get("/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, campground) {
        if (!err && campground) {
            res.render("campgrounds/show", { campground: campground });
        }
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;