const Quote = require("../../../database/models/Quote");

const createQuote = async (_root, { quoteInput }, { verifiedUser }, _info) => {
    const { quote, author, year } = quoteInput;
    const newQuote = new Quote({
      quote,
      author,
      year,
      userId: verifiedUser._id,
    });

    return await newQuote.save();
  };
const updateQuote = async (
    _root,
    { _id, quoteInput },
    { verifiedUser },
    _info
  ) => {
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
  };
 const deleteQuote =  async (_root, { id: _id }, { verifiedUser }, _info) => {
    if (!verifiedUser) throw new Error("Unauthorized");
    const { _id: userId } = verifiedUser;

    const deletedQuote = await Quote.findOneAndDelete({ _id, userId });
    if (!deletedQuote) {
      throw new Error(`Invalid deleted!`);
    }
    return deletedQuote;
  };

module.exports = { createQuote, updateQuote, deleteQuote };