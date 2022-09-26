const types = `
    type Quote {
        _id: ID!
        quote: String!
        author: String!
        year: Int
    }
    input QuoteInputData {
        quote: String!
        author: String!
        year: Int
    }
`;

const queries = `
    allQuotes: [Quote!]!
`;

const mutations = `
    createQuote(quoteInput: QuoteInputData): Quote!
    updateQuote(_id: ID!, quoteInput: QuoteInputData): Quote!
    deleteQuote(_id: ID!): Quote!
`;

module.exports = {types, queries, mutations};