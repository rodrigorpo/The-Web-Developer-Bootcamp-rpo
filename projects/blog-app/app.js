const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    moment = require('moment'),
    methodOverride = require('method-override'),
    expressSanitizer = require('express-sanitizer');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


// === MONGOOSE CONFIGURATION ===
const connectPath = "mongodb://192.168.99.100:27017";
const DATABASE = "blog-app";
mongoose.connect(`${connectPath}/${DATABASE}`);

// SCHEMA SETUP
const schema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

const Dog = mongoose.model('Dog', schema);

const findDogById = (id) => {
    return Dog.findById(id, (err, result) => {
        if (!err && result) {
        }
    });
}

const findDogs = () => {
    return Dog.find({}, (err, result) => {
        if (!err && result) {
        }
    });
}

const createDog = (dogObject) => {
    return Dog.create(dogObject, (err, result) => {
        if (!err && result) {
        }
    });
}

const updateDog = (id, dogObject) => {
    return Dog.update({ _id: id }, dogObject, (err, result) => {
        if (!err && result) {
        }
    });
}

const deleteDog = (id) => {
    return Dog.deleteOne({ _id: id }, (err, result) => {
        if (!err && result) {
        }
    });
}

// MOCK

const dogsMock = [{
    image: "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg", title: "Dogs",
    body: "Dogs body loren", created: moment().format('Do MMMM YYYY')
},
{
    image: "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg", title: "Dogs",
    body: "Dogs body", created: moment().format('Do MMMM YYYY')
}];
dogsMock[0]['_id'] = 1;
dogsMock[1]['_id'] = 2;

// Default
app.get("/", function (req, res) {
    res.render("index");
});

// Show all Dogs
app.get("/dogs", function (req, res) {
    findDogs().then((data) => {
        res.render("show-all-dogs", { dogs: data });
    });
});

// Show new dog form
app.get("/dogs/new", function (req, res) {
    res.render("new-dog");
});

// Create new dog
app.post("/dogs", function (req, res) {
    req.body.body = req.sanitize(req.body.body);
    Dog.create(req.body, (err, result) => {
        if (!err && result) {
            findDogs().then((data) => {
                res.render("show-all-dogs", { dogs: data });
            })
        }
    });
});

// Show info about one specific dog
app.get("/dogs/:id", function (req, res) {
    findDogById(req.params.id).then((data) => {
        res.render("show-dog", { dog: data });
    });
});

// Show edit form for one dog
app.get("/dogs/:id/edit", function (req, res) {
    findDogById(req.params.id).then((data) => {
        res.render("edit-dog", { dog: data });
    });
});

// Edit a dog
app.put("/dogs/:id", function (req, res) {
    req.body.body = req.sanitize(req.body.body);
    Dog.update({ _id: req.params.id }, req.body, (err, result) => {
        if (!err && result) {
            findDogs().then((data) => {
                res.render("show-all-dogs", { dogs: data });
            })
        }
    });
});

// Delete a particular dog, then redirect home
app.delete("/dogs/:id", function (req, res) {
    deleteDog(req.params.id).then(
        findDogs().then((data) => {
            res.render("show-all-dogs", { dogs: data });
        })
    );
});

app.listen(3000, function () {
    console.log("Server started!");
});