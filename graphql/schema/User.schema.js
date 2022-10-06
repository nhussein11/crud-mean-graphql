const types = `
    type User {
        _id: ID!
        name: String!
        address: String!
        email: String!
        password: String!
    }
    type LoginData {
        token: String
        user: User
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
    getUser(email: String!, password: String!) : LoginData
`;

const mutations = `
    createUser(userInput: UserInputData) : User!
    updateUser(_id: ID!, userInput: UserInputData) : User!
    deleteUser(_id: ID!) : User!
`; 
module.exports = {types, queries, mutations};