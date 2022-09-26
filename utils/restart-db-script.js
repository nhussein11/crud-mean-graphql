const Quote = require("../database/models/Quote");
const User = require("../database/models/User");

const { connectToDatabase } = require("../database/connection");

const deleteAllTables = async () => {
  console.log("deleting");
  await Quote.deleteMany({})
  await User.deleteMany({})

};

const populateQuoteSchema = async () => {
  const defaultQuotes = [
    { author: "Madeleine L'Engle", quote: "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children", year: 1999 },
    { author: "Stephen King", quote: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.", year: 1998 },
    { author: "Anaïs Nin", quote: "We write to taste life twice, in the moment and in retrospect", year: 2004 },
    { author: "Mark Twain", quote: "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be", year: 1987 },
    { author: "Benjamin Franklin", quote: "Either write something worth reading or do something worth writing.", year: 2008 },
  ];
  console.log("populateQuoteSchema");
  await Quote.insertMany(defaultQuotes);
};

const populateUserSchema = async () => {
  const defaultUsers = [
    {
      name: "Nico",
      address: "Salta",
      email: "nico@gmail.com",
      password: "1234",
    },
    {
      name: "Lucas",
      address: "Salta",
      email: "lucas@gmail.com",
      password: "1234",
    },
    {
      name: "Luis",
      address: "Salta",
      email: "luis@gmail.com",
      password: "1234",
    },
  ];
  console.log("populateUserSchema");
  await User.insertMany(defaultUsers);
};

const populataDatabase = async () => {
  try {
    await populateQuoteSchema();
    await populateUserSchema();
  } catch (error) {
    throw new Error(error);
  }
};

const main = async () => {
  await deleteAllTables();
  await populataDatabase();
};

connectToDatabase();
main();