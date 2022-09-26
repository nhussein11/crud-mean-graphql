const mongoose = require("mongoose");

const connectToDatabase = async () => {
    mongoose
        .connect("mongodb://root:1234@localhost:27017/", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
}

module.exports = {connectToDatabase}