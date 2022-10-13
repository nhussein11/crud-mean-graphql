const Quote = require("../../../database/models/Quote");

const allQuotes = async (_root, _args, { verifiedUser }, _info) => {
  const { _id: userId } = verifiedUser;
  const quotes = await Quote.find({ userId });
  return quotes;
};

module.exports = { allQuotes };
