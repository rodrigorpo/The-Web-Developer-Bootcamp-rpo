const express = require("express"),
    router = express.Router({ mergeParams: true }),
    Campground = require('../models/campground'),
    Comment = require('../models/comment');

// Add comments view
router.get("/new", isLoggedIn, function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, campground) {
        if (!err && campground) {
            res.render("comments/new", { campground: campground });
        }
    });
});

// Comments new
router.post("/", isLoggedIn, function (req, res) {
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

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;