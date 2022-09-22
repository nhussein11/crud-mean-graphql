const userResolver = require("./User.resolver");
const quoteResolver = require("./Quote.resolver");

const { allUsers, getUser,createUser, updateUser, deleteUser } = userResolver;
const { allQuotes, createQuote, updateQuote, deleteQuote } = quoteResolver;

module.exports = {
  allUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  allQuotes,
  createQuote,
  updateQuote,
  deleteQuote,
};
