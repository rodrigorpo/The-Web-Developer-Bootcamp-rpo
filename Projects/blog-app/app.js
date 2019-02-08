const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// === MONGOOSE CONFIGURATION ===
const connectPath = "mongodb://192.168.99.100:27017";
const DATABASE = "blog-app";
mongoose.connect(`${connectPath}/${DATABASE}`);

// SCHEMA SETUP
const schema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

const Dog = mongoose.model('Dog', schema);

const createDog = (dogObject) => {
    Dog.create(dogObject, (err, result) => {
        if (!err && result) {
        }
    });
}

const updateDog = (id, dogObject) => {
    Dog.update({ _id: id }, dogObject, (err, result) => {
        if (!err && result) {
        }
    });
}

const deleteDog = (id) => {
    Dog.deleteOne({ _id: id }, (err, result) => {
        if (!err && result) {
        }
    });
}

// Default
app.get("/", function(req, res){
    res.render("index");
});

// Show all Dogs
app.get("/dogs", function(req, res){
    res.render("show-all-dogs");
});

// Show new dog form
app.get("/dogs/new", function(req, res){
    res.render("new-dog");
});

// Create new dog
app.post("/dogs", function(req, res){
    res.redirect("show-all-dogs");
});

// Show info about one specific dog
app.get("/dogs/:id", function(req, res){
    res.render("show-dog");
});

// Show edit form for one dog
app.get("/dogs/:id/edit", function(req, res){
    res.render("index");
});

// Show edit form for one dog
app.put("/dogs/:id", function(req, res){
    res.redirect("edit-dog");
});

// Delete a particular dog, then redirect home
app.delete("/dogs/:id", function(req, res){
    res.redirect("show-all-dogs");
});

app.listen(3000, function(){
    console.log("Server started!");
});