const mongoose = require('mongoose');

// Posts
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema);