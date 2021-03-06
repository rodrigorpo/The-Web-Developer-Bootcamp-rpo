// === Default imports ===
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const methodOverride = require('method-override');
const flash = require('connect-flash');

// === Configuring Express and simple methods === 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); // referes where the script is running
app.use(methodOverride("_method"));
app.use(flash());

// === Openning connection to mongoose ===
require('./configuration/mongoose-connection');

// === Importing models ===
const User = require('./models/user');
const seedDB = require('./configuration/seeds');

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
app.use("/", require('./routes/index'));
app.use("/campgrounds", require('./routes/campgrounds'));
app.use("/campgrounds/:id/comments", require('./routes/comments'));

seedDB();

app.listen(3000, function () {
    console.log("Application started!");
});