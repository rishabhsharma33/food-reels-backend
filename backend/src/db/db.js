const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongodb://localhost:27017/zomato-reels")
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = connectDB;