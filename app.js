const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const { connectToDatabase } = require("./database/connection");
const { authenticate } = require("./middlewares/auth");

const typeDefs = require("./graphql/schema/index.schema");
// const resolvers = require("./graphql/resolvers/index.resolver");
const resolvers = require("./graphql/resolvers/resolver");
const { makeExecutableSchema } = require('@graphql-tools/schema')

const app = express();

app.use(bodyParser.json());
app.use(cors());
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: graphqlResolver,
    graphiql: true,
  })
  );

connectToDatabase()
  .then(() => {
    app.listen(4000, console.log("Connecting to port 4000"));
  })
  .catch((error) =>
    console.error("MongoDB connection failed: ", error.message)
  );

console.log("Running a GraphQL API server at http://localhost:4000/graphql");
