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
    type QuoteData {
        quotes: [Quote!]!
    }
    type UserData {
        users: [User!]!
    }
    input QuoteInputData {
        quote: String!
        author: String!
    }
    type RootQuery {
        quotes: QuoteData!
        users: UserData!
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
