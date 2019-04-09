const express = require("express");
const router = express.Router();
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const Middleware = require('../middleware');

// Show all campgrounds
router.get("/", function (req, res) {
    Campground.find({}, function (err, campgrounds) {
        if (!err && campgrounds) {
            res.render("campgrounds/index", { campgrounds: campgrounds });
        }
    });
    // res.render("campgrounds", { campgrounds: campgrounds_mocks });
});

// Edit Campground
router.get("/:id/edit", Middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
        res.render("campgrounds/edit", { campground: foundCampground });
    });
});

router.put("/:id", Middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, foundCampground) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

router.delete("/:id", Middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findByIdAndRemove(req.params.id, function (err, campgroundRemoved) {
        if (err) {
            res.redirect("/campgrounds");
        }
        Comment.deleteMany({ _id: { $in: campgroundRemoved.comments } }, (err) => {
            if (err) {
                console.log(err);
            }
            res.redirect("/campgrounds");
        });
    });
});

// Add campground view
router.get("/new", Middleware.isLoggedIn, function (req, res) {
    res.render("campgrounds/new");
});

// Create campground
router.post("/", Middleware.isLoggedIn, function (req, res) {
    const author = {
        id: req.user._id,
        username: req.user.username
    }

    Campground.create({ name: req.body.name, image: req.body.img, description: req.body.description, author }, function (err, campground) {
        if (!err && campground) {
            res.redirect("/campgrounds");
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

module.exports = router;