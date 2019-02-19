const mongoose = require('mongoose');

// === Connecting to DB ===
require('./mongoose-connection');

// === Calling models imports ===
const Campground = require('../models/campground');
const Comment = require('../models/comment')

// === Campgrounds Mock ===
let data = [{ name: "Salmon Creek", image: "https://souldust.com/wp-content/uploads/2011/05/website_hero_camp16.jpeg", description: "Salmon Creeks description Salmon Creeks description Salmon Creeks description Salmon Creeks description", author: { id: mongoose.Types.ObjectId("5c6b7caf2758f7255c3c0a2f"), username: "Rodrigo" } },
{ name: "Granite Hill", image: "https://r-ec.bstatic.com/images/hotel/max1024x768/647/64748006.jpg", description: "Granite Hill description Granite Hill description Granite Hill description Granite Hill description ", author: { id: mongoose.Types.ObjectId("5c6b7caf2758f7255c3c0a2f"), username: "Rodrigo" } },
{ name: "Mountain Goat's Rest", image: "https://r-ec.bstatic.com/images/hotel/max1024x768/647/64748006.jpg", description: "Mountain Goat's Rest description Mountain Goat's Rest description Mountain Goat's Rest description Mountain Goat's Rest description ", author: { id: mongoose.Types.ObjectId(), username: "Rodrigo" } },
{ name: "Small Trailler", image: "https://visitrainier.com/wp-content/uploads/2014/02/Camping-at-White-River-Campground-e1527786151787.jpg", description: "Small Trailler description Small Trailler description Small Trailler description Small Trailler description ", author: { id: mongoose.Types.ObjectId(), username: "Rodrigo" } }]

function seedDB() {
    Campground.remove({}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Campgrounds removed!")

            // Adding a few campgrounds
            data.forEach((obj, index) => {
                Campground.create(obj, (err, campground) => {
                    if (!err && campground) {
                        console.log(`Added campground ${index}`);

                        // Adding a few comments to campgrounds
                        Comment.remove({}, (err) => {
                            Comment.create({
                                text: `This place is great, but I wish there was internet. Campground comment: ${index}`,
                                author: {
                                    username: "Rodrigo",
                                    _id: "5c66365e618f4c176899a2a8"
                                }
                            }, (err, comment) => {
                                if (!err && campground) {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log(`Added comment: ${index}`)
                                }
                            });
                        });
                    }
                });
            });
        }
    });


}

module.exports = seedDB;