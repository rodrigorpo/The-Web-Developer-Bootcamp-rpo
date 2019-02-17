const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.send("Hi there!");
});

app.get("/bye", function (request, response) {
    response.send("Bye!");
});

// ROUTE PARAMS
app.get("/r/:name/:id", function (request, response) {
    console.log(`Params: ${request.params.name} ${request.params.id}`);
    response.send("Bye!");
});

// This will be response to all endpoints that we didn't define before
app.get("*", function (request, response) {
    response.send("Wrong endpoint");
});


app.listen(3000, function (params) {
    console.log("Server has started!");
});