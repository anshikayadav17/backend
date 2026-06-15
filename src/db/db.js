

const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://at:anshika55@yt-complete-backend.biakvsn.mongodb.net/halley")

    console.log("Connected to DB")
}

module.exports = connectDB