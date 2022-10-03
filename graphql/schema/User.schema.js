const types = `
    type User {
        _id: ID!
        name: String!
        address: String!
        email: String!
        password: String!
    }
    type Token {
        token: String
    }
    input UserInputData{
        name: String!
        address: String!
        email: String!
        password: String!
    }
`;

const queries = `
    allUsers: [User!]!
    getUser(email: String!, password: String!) : Token
`;

const mutations = `
    createUser(userInput: UserInputData) : User!
    updateUser(_id: ID!, userInput: UserInputData) : User!
    deleteUser(_id: ID!) : User!
`; 
module.exports = {types, queries, mutations};