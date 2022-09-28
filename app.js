const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const { connectToDatabase } = require("./database/connection");
const { authenticate } = require("./middlewares/auth");

const graphqlSchema = require("./graphql/schema/index.schema");
const graphqlResolver = require("./graphql/resolvers/index.resolver");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(authenticate);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

app.get('/', (req,res) => {
  res.send("Welcome!")
})


connectToDatabase()
  .then(() => {
    app.listen(4000, console.log("Connecting to port 4000"));
  })
  .catch((error) =>
    console.error("MongoDB connection failed: ", error.message)
  );

console.log("Running a GraphQL API server at http://localhost:4000/graphql");
