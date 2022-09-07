const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");


const graphqlSchema = require('./graphql/schema')
const graphqlResolver = require('./graphql/resolvers')

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

mongoose
  .connect("mongodb://root:1234@localhost:27017/", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(4000, console.log("Connecting to port 3000"));
  })
  .catch((error) => console.error("MongoDB connection failed:", error.message))
  
console.log("Running a GraphQL API server at http://localhost:4000/graphql");