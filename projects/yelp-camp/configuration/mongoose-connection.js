const mongoose = require('mongoose');

// === MONGOOSE DATEBASE AND CONNECTION CONFIGURATION ===
const connectPath = "mongodb://192.168.99.100:27017";
const DATABASE = "yelp_camp";

module.exports = mongoose.connect(`${connectPath}/${DATABASE}`);