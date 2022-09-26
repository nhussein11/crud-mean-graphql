const mongoose = require("mongoose");

const connectToDatabase = (app) => {
    mongoose
        .connect("mongodb://root:1234@localhost:27017/", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
        .then(() => {
        app.listen(4000, console.log("Connecting to port 4000"));
        })
        .catch((error) => console.error("MongoDB connection failed:", error.message));
    
    console.log("Running a GraphQL API server at http://localhost:4000/graphql");
}

module.exports = {connectToDatabase}