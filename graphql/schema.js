const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Quote {
        _id: ID!
        quote: String!
        author: String!
    }
    type User {
        _id: ID!
        name: String!
        address: String!
        email: String!
        password: String!
    }
    input QuoteInputData {
        quote: String!
        author: String!
    }
    input UserInputData{
        name: String!
        address: String!
        email: String!
        password: String!
    }
    type RootQuery {
        allQuotes: [Quote!]!
        allUsers: [User!]!
    }
    type RootMutation {
        createQuote(quoteInput: QuoteInputData): Quote!
        updateQuote(id: ID!, quoteInput: QuoteInputData): Quote!
        deleteQuote(id: ID!): Quote!
        createUser(userInput: UserInputData) : User!
        updateUser(id: ID!, userInput: UserInputData) : User!
        deleteUser(id: ID!) : User!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
