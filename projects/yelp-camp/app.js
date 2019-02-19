// === Default imports ===
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    methodOverride = require('method-override');

// === Importing routes ===
const indexRoutes = require('./routes/index');
const campgroundRoutes = require('./routes/campgrounds');
const commentRoutes = require('./routes/comments');

// === Openning connection to mongoose ===
require('./configuration/mongoose-connection');

// === Importing models ===
const User = require('./models/user');
const seedDB = require('./configuration/seeds');

// === Configuring Express === 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); // referes where the script is running
app.use(methodOverride("_method"));
// app.use(express.static("public"));

//=== Passport Configuration === 
app.use(require('express-session')({ secret: "Bob is the best dog", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// === Middleware === 
// -- Adding User session --> every route will pass through this
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

// -- Routes
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

seedDB();

app.listen(3000, function () {
    console.log("Application started!");
});