const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.send("Hi there, welcome to my assignment! <h1>LOL<h1>");
});

app.get("/speak/:animal", function (request, response) {
    let phraseResponse = `The ${request.params.animal} says `;
    switch (request.params.animal) {
        case 'pig':
            phraseResponse += "\'Oink\'";
            break;
        case 'cow':
            phraseResponse += "\'Moo\'";
            break;
        case 'dog':
            phraseResponse += "\'Woof Woof!\'";
            break;
        default:
            phraseResponse = "Animal sound not subscribed!";
    }
    response.send(phraseResponse);
});

app.get("/repeat/:word/:number", function (request, response) {
    let phraseResponse = '';
    for(let i=0; i< request.params.number; i++){
        phraseResponse += request.params.word;
    }
    response.send(phraseResponse);
});

// This will be response to all endpoints that we didn't define before
app.get("*", function (request, response) {
    response.send("Sorry, page not found... What are you doing with your life?");
});


app.listen(3000, function (params) {
    console.log("Server has started!");
});