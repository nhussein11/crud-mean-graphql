const Quote = require("../models/Quote");

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
  updateQuote: async ({ id, quoteInput }) => {
    const updatedQuote = await Quote.findByIdAndUpdate(id, {
      quoteInput,
    });
    if (!updatedQuote) {
      throw new Error("No quote found!");
    }
    return {
      ...updatedQuote.toJSON(),
      _id: updatedQuote._id.toString(),
    };
  },
  deleteQuote: async ({ id }) => {
    const deletedQuote = await Quote.findByIdAndDelete(id);
    if (!deletedQuote) {
      throw new Error(`No quote with id ${id} found!`);
    }
    return {
      ...deletedQuote.toJSON(),
      _id: deletedQuote._id.toString(),
    };
  },
};
