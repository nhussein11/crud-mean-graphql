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
  updateQuote: async ({ _id, quoteInput }, { verifiedUser }) => {
    if (!verifiedUser) throw new Error("Unauthorized");

    const { _id: userId } = verifiedUser;
    const { quote, author, year } = quoteInput;

    const updatedQuote = await Quote.findOneAndUpdate(
      { _id, userId },
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
  deleteQuote: async ({ id: _id }, { verifiedUser }) => {
    if (!verifiedUser) throw new Error("Unauthorized");
    const { _id: userId } = verifiedUser;

    const deletedQuote = await Quote.findOneAndDelete({_id, userId});
    if (!deletedQuote) {
      throw new Error(`Invalid deleted!`);
    }
    return deletedQuote;
  },
};
