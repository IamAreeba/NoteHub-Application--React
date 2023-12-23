

const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const mongoURI = "mongodb://localhost:27017/notehub?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = async() => {
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Connected to Mongo Successfully");
}

module.exports = connectToMongo;