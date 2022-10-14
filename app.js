const bodyParser = require("body-parser");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { connectToDatabase } = require("./database/connection");
const { authenticate } = require("./middlewares/auth");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { applyMiddleware } = require("graphql-middleware");
const typeDefs = require("./graphql/schema/index.schema");
const resolvers = require("./graphql/resolvers/resolvers");
const cookieParser = require("cookie-parser");
const corsMiddleware = require("./cors");

const app = express();
app.use(corsMiddleware);

app.use(bodyParser.json());
app.use(cookieParser());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

const middlewares = {
  Query: {
    allQuotes: authenticate,
    getUser: authenticate,
  },
};

const schemaWithMiddleware = applyMiddleware(schema, middlewares);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaWithMiddleware,
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
