const Quote = require("../models/quote");

module.exports = {
  quotes: async () => {
    const quotes = await Quote.find();
    return {
      quotes: quotes.map((q) => {
        return {
          ...q.toJSON(),
          _id: q._id.toString(),
        };
      }),
    };
  },
  createQuote: async ({ quoteInput }) => {
    const { quote, author } = quoteInput;
    const newQuote = new Quote({
      quote,
      author,
    });
    const createdQuote = await newQuote.save();
    return {
      ...createdQuote.toJSON(),
      _id: createdQuote._id.toString(),
      quote: createdQuote.quote,
      author: createdQuote.author,
    };
  },
};
