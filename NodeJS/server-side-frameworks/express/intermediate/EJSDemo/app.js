const express = require('express');
const app = express();

// Tells express to serve the files in the 'public' directory
app.use(express.static("public"));

// We can ommit .ejs when they are template views, telling express the engine
app.set("view engine", "ejs");

// Render template
app.get("/", function (req, res) {
    res.render("home");
});

// Templace with variables
app.get("/fallinlovewith/:thing", function (req, res) {
    const thing = req.params.thing;
    res.render("love", { thing });
})

app.get("/posts", function (req, res) {
    const array = [{ title: 'Post 1', author: 'Rodrigo' },
    { title: 'Post 2', author: 'Leticia' },
    { title: 'Post 3', author: 'Mariana' }];
    res.render('posts', {array: array});
})



app.listen(3000, function(){
    console.log('Server started!')
});