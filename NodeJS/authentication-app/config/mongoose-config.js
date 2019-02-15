const mongoose = require('mongoose');

// === MONGOOSE CONFIGURATION ===
const connectPath = "mongodb://192.168.99.100:27017";
const DATABASE = "authentication-app";
module.exports = mongoose.connect(`${connectPath}/${DATABASE}`);