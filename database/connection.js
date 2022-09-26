const mongoose = require("mongoose");
require('dotenv').config()


const connectToDatabase = async () => {
  mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = { connectToDatabase };
 