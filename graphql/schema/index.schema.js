const { buildSchema } = require("graphql");
const Quote = require("./Quote.schema")
const User = require("./User.schema")

const types = [];
const queries = [];
const mutations = [];

const schemas = [Quote, User];
schemas.forEach((s) => {
  types.push(s.types);
  queries.push(s.queries);
  mutations.push(s.mutations);
});

module.exports = buildSchema(`
    ${types.join('\n')}
    type RootQuery {    
        ${queries.join('\n')}
    }
    type RootMutation {
        ${mutations.join('\n')}
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
