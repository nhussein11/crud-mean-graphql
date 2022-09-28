const { Quote} = require('../../database/models')

module.exports = {
  allQuotes: async () => {
    const quotes = await Quote.find();
    return quotes;
  },
  createQuote: async ({ quoteInput }, {verifiedUser}) => {
    console.log( 'verifiedUser', verifiedUser)
    const { quote, author, year } = quoteInput;
    const newQuote = new Quote({
      quote,
      author,
      year,
      userId: verifiedUser._id
    });
    console.log (newQuote)
    const createdQuote = await newQuote.save();
    return {
      ...createdQuote.toJSON()
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
      ...updatedQuote.toJSON()
    };
  },
  deleteQuote: async ({ id: _id }) => {
    const deletedQuote = await Quote.findByIdAndDelete(_id);
    if (!deletedQuote) {
      throw new Error(`No quote with id ${_id} found!`);
    }
    return {
      ...deletedQuote.toJSON()
    };
  },
};
