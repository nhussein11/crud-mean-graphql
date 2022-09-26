const Quote = require("../../models/Quote");

module.exports = {
  allQuotes: async () => {
    const quotes = await Quote.find();
    return quotes;
  },
  createQuote: async ({ quoteInput }) => {
    const { quote, author, year } = quoteInput;
    const newQuote = new Quote({
      quote,
      author,
      year
    });
    const createdQuote = await newQuote.save();
    return {
      ...createdQuote.toJSON(),
      _id: createdQuote._id.toString(),
      quote: createdQuote.quote,
      author: createdQuote.author,
    };
  },
  updateQuote: async ({ _id, quoteInput }) => {
    console.log(_id)
    const { quote, author, year } = quoteInput;
    const updatedQuote = await Quote.findByIdAndUpdate(
      _id,
      {
        quote,
        author,
        year
      },
      { new: true }
    );
    if (!updatedQuote) {
      throw new Error("No quote found!");
    }
    return {
      ...updatedQuote.toJSON(),
      _id: updatedQuote._id.toString(),
    };
  },
  deleteQuote: async ({ id: _id }) => {
    const deletedQuote = await Quote.findByIdAndDelete(_id);
    if (!deletedQuote) {
      throw new Error(`No quote with id ${_id} found!`);
    }
    return {
      ...deletedQuote.toJSON(),
      _id: deletedQuote._id.toString(),
    };
  },
};
