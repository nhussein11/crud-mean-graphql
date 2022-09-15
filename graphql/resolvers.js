const { create } = require("../models/Quote");
const Quote = require("../models/Quote");
const User = require("../models/User");

module.exports = {
  allQuotes: async () => {
    const quotes = await Quote.find();
    return quotes;
  },
  createQuote: async ({ quoteInput }) => {
    const { quote, author } = quoteInput;
    const newQuote = new Quote({
      quote,
      author,
    });
    const createdQuote = await newQuote.save();
    return {
      ...createdQuote.toJSON(),
      _id: createdQuote._id.toString(),
      quote: createdQuote.quote,
      author: createdQuote.author,
    };
  },
  updateQuote: async ({ id, quoteInput }) => {
    const updatedQuote = await Quote.findByIdAndUpdate(id, {
      quoteInput,
    });
    if (!updatedQuote) {
      throw new Error("No quote found!");
    }
    return {
      ...updatedQuote.toJSON(),
      _id: updatedQuote._id.toString(),
    };
  },
  deleteQuote: async ({ id }) => {
    const deletedQuote = await Quote.findByIdAndDelete(id);
    if (!deletedQuote) {
      throw new Error(`No quote with id ${id} found!`);
    }
    return {
      ...deletedQuote.toJSON(),
      _id: deletedQuote._id.toString(),
    };
  },
  allUsers: async () => {
    const users = await User.find();
    return users;
  },
  createUser: async ({ userInput }) => {
    const { name, address, email, password } = userInput;
    const newUser = new User({
      name,
      address,
      email,
      password,
    });
    const createdUser = await newUser.save();
    return {
      ...createdUser.toJSON(),
      _id: createdUser._id.toString(),
      name: createdUser.name,
      address: createdUser.address,
      email: createdUser.email,
      password: createdUser.password,
    };
  },
  updateUser: async ({ id, userInput }) => {
    const { name, address, email, password } = userInput;
    const updatedUser = await User.findByIdAndUpdate(id, {
      name,
      address,
      email,
      password,
    }, {new: true});

    if (!updatedUser) {
      throw new Error("No user found!");
    }
    return {
      ...updatedUser.toJSON(),
      _id: updatedUser._id.toString(),
    };
  },
  deleteUser: async ({ id }) => {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new Error(`No user with id ${id} found!`);
    }
    return {
      ...deletedUser.toJSON(),
      _id: deletedUser._id.toString(),
    };
  },
};
