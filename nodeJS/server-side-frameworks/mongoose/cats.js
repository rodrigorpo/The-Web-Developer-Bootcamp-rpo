const mongoose = require('mongoose');
const connectPath = "mongodb://192.168.99.100:27017";
const DATABASE = "cat_app";

mongoose.connect(`${connectPath}/${DATABASE}`);

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// We took the schema and compiled to a model -- that is the real acess to a db
// We name a collection name Cats with the singular of the word
const Cat = mongoose.model("Cat", catSchema);

// Adding a new cat

const coll = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

coll.save(function (err, cat) {
    if (!err && cat) {
        console.log(cat);
    }
});

// Do the same /\ \/

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err, cat) {
    if (!err && cat) {
        console.log(cat);
    }
})

Cat.find({}, function (err, cats) {
    if (!err && cats) {
        console.log(cats);
    }
});

