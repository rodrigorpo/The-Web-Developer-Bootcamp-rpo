const express = require("express");
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get("/", function (req, res) {
    res.render("landing");
});

router.get("/register", function (req, res) {
    res.render("register");
});

router.post("/register", function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/campgrounds");
        });
    });
});

router.get("/login", function (req, res) {
    res.render("login", { message: req.flash("error") });
});

router.post("/login", passport.authenticate("local", { successRedirect: "/campgrounds", failureRedirect: "/register" }), function (req, res) {
});

router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = router;