const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

const Post = require('./models/post');
const User = require('./models/user');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// === MONGOOSE CONFIGURATION ===
const connectPath = "mongodb://192.168.99.100:27017";
const DATABASE = "data-persistent";
mongoose.connect(`${connectPath}/${DATABASE}`);

// ==> SCHEMAS SETUP


// // Users by creating posts inside
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     posts: [postSchema]
// });

// Users using reference

// User.create({
//     name: "Rodrigo Pereira", email: "rodrigorpogo@gmail.com", posts: []
// }, (err, result) => {
//     if (!err && result) {
//         console.log(result);
//     }
// });

Post.create({
    title: "Um dia em BH!", content: "Visitando ço!"
}, (err, post) => {
    if (!err && post) {
        User.findOne({ email: "rodrigorpogo@gmail.com" }, function (err, userFound) {
            if (!err && userFound) {
                console.log(userFound);
                userFound.posts.push(post);
                userFound.save(function (err, data) {
                    if (!err && data) {
                        console.log(data);
                    }
                });
            }
        });
    }
});

// Populate the Object searching the Objecte reference by ID - posts is a variable inside User's Document
User.findOne({ email: "rodrigorpogo@gmail.com" }).populate("posts").exec(function (err, user) {
    console.log(user);
});

// Single find with reference, not the objects
User.findOne({ email: "rodrigorpogo@gmail.com" }, function (err, user) {
    console.log(user);
});


app.get("/", function (req, res) {
    res.render("landing");
});