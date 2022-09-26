const Quote = require("../models/Quote");
const User = require("../models/User");

const deleteAllTables = async () => {
  console.log( "deleting")
  await Quote.deleteMany({});
  await User.deleteMany({});
};

const populateQuoteSchema = async () => {
  const defaultQuotes = [
    { author: "Messi", quote: "Hola quote 1", year: 1999 },
    { author: "Neymar", quote: "Hola quote 2", year: 1998 },
    { author: "Riquelme", quote: "Hola quote 3", year: 2004 },
    { author: "Valverde", quote: "Hola quote 4", year: 1987 },
    { author: "Duki", quote: "Hola quote 5", year: 2008 },
  ];
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
  ];
  await Quote.insertMany(defaultUsers);
};

const populataDatabase = async () => {
  try {
    await populateQuoteSchema();
    await populateUserSchema();
  } catch (error) {
    throw new Error(error);
  }
};

const main = async ()=> {
    await deleteAllTables();
    await populataDatabase();
};

main()