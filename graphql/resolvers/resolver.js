const { Quote } = require("../../database/models");
const { User } = require("../../database/models");
const { createJWTToken } = require("../../utils/auth");
const { allUsers, getUser } = require("./User/user.query");
const { createUser, updateUser, deleteUser } = require("./User/user.mutation");

const resolvers = {
  Query: { allUsers, getUser },
  //   {
  //     ...userQueries,
  //     allQuotes: async (_root, _args, { verifiedUser }, _info) => {
  //       const { _id: userId } = verifiedUser;
  //       const quotes = await Quote.find({ userId });
  //       return quotes;
  //     },
  //   }

  Mutation: {
    createUser,
    updateUser,
    deleteUser,
    createQuote: async (_root, { quoteInput }, { verifiedUser }, _info) => {
      const { quote, author, year } = quoteInput;
      const newQuote = new Quote({
        quote,
        author,
        year,
        userId: verifiedUser._id,
      });

      return await newQuote.save();
    },
    updateQuote: async (
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
    },
    deleteQuote: async (_root, { id: _id }, { verifiedUser }, _info) => {
      if (!verifiedUser) throw new Error("Unauthorized");
      const { _id: userId } = verifiedUser;

      const deletedQuote = await Quote.findOneAndDelete({ _id, userId });
      if (!deletedQuote) {
        throw new Error(`Invalid deleted!`);
      }
      return deletedQuote;
    },
  },
};

module.exports = resolvers;
