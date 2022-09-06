const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote: {
        type:string,
        required: true 
    },
    author: {
        type:string,
        required: true 
    }
});

module.exports = mongoose.model('Quote',quoteSchema);