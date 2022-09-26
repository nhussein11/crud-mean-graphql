const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const {connectToDatabase} = require('./database/connection')

const graphqlSchema = require("./graphql/schema/index.schema");
const graphqlResolver = require("./graphql/resolvers/index.resolver");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

connectToDatabase(app)