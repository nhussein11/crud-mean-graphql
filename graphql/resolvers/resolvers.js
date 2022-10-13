const { allUsers, getUser } = require("./User/user.query");
const { createUser, updateUser, deleteUser } = require("./User/user.mutation");

const { allQuotes } = require("./Quote/quote.query");
const {
  createQuote,
  updateQuote,
  deleteQuote,
} = require("./Quote/quote.mutation");

const resolvers = {
  Query: { allUsers, getUser, allQuotes },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
    createQuote,
    updateQuote,
    deleteQuote,
  },
};

module.exports = resolvers;
