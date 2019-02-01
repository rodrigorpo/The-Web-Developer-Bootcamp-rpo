const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

let friends = ["Tom", "Cat", "Louis", "Kate"];

app.get("/", function (req, res) {
    res.render("home");
});

// Install body-parser
app.post("/addFriend", function (req, res) {
    friends.push(req.body.newFriend);
    res.redirect("/friends");
});

app.get("/friends", function (req, res) {

    res.render("friends", { friends: friends });
});

app.listen(3000, function () {
    console.log("Server started!!!")
});