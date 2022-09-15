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
    type UserData {
        user: [User!]!
    }
    input QuoteInputData {
        quote: String!
        author: String!
    }
    type RootQuery {
        allQuotes: [Quote!]!
        users: [User!]!
    }
    type RootMutation {
        createQuote(quoteInput: QuoteInputData): Quote!
        updateQuote(id: ID!, quoteInput: QuoteInputData): Quote!
        deleteQuote(id: ID!): Quote!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
