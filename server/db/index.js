const mongoose = require("mongoose");
async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://Mash:1234@kursavaya.pi1tb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
}

module.exports = connectDB;
