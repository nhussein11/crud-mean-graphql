const types = `
    type Quote {
        _id: ID!
        quote: String!
        author: String!
    }
    input QuoteInputData {
        quote: String!
        author: String!
    }
`;

const queries = `
    allQuotes: [Quote!]!
`;

const mutations = `
    createQuote(quoteInput: QuoteInputData): Quote!
    updateQuote(id: ID!, quoteInput: QuoteInputData): Quote!
    deleteQuote(id: ID!): Quote!
`;

module.exports = {types, queries, mutations};