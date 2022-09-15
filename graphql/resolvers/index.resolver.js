const userResolver = require("./User.resolver");
const quoteResolver = require("./Quote.resolver");

const { allUsers, createUser, updateUser, deleteUser } = userResolver;
const { allQuotes, createQuote, updateQuote, deleteQuote } = quoteResolver;

module.exports = {
  allUsers,
  createUser,
  updateUser,
  deleteUser,
  allQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
};
