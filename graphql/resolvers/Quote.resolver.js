const { Quote } = require("../../database/models");

module.exports = {
  allQuotes: async (_, { verifiedUser }) => {
    const { _id: userId } = verifiedUser;
    const quotes = await Quote.find({ userId });
    return quotes;
  },
  createQuote: async ({ quoteInput }, { verifiedUser }) => {
    const { quote, author, year } = quoteInput;
    const newQuote = new Quote({
      quote,
      author,
      year,
      userId: verifiedUser._id,
    });

    return await newQuote.save();
  },
  updateQuote: async ({ _id, quoteInput }) => {
    const { quote, author, year } = quoteInput;
    const updatedQuote = await Quote.findByIdAndUpdate(
      _id,
      {
        quote,
        author,
        year,
      },
      { new: true }
    );
    if (!updatedQuote) {
      throw new Error("No quote found!");
    }
    return updatedQuote;
  },
  deleteQuote: async ({ id: _id }) => {
    const deletedQuote = await Quote.findByIdAndDelete(_id);
    if (!deletedQuote) {
      throw new Error(`No quote with id ${_id} found!`);
    }
    return deletedQuote;
  },
};
