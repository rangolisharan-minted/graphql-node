const esGraphQL = require('dh-elasticsearch-graphql');
const graphql = require('graphql');
const hitsSchema = require('./schema');
const graphqlHTTP = require('express-graphql');

const express = require('express');
const cors = require('cors');

const mapping = require('./product-mapping-stripped.js');

const app = express();

// Construct a schema, using GraphQL schema language
const productDataSchema = esGraphQL({
  graphql,
  name: 'productData',
  mapping,
  elastic: {
    host: 'http://localhost:9200',
    index: 'product',
    type: 'product',
    query(query, context) {
      // debugger
      return query;
    },
  },
  hitsSchema,
});

app.use(cors());

const graphqlMiddleware = graphqlHTTP(request => ({
  context: request,
  graphiql: true,
  schema: new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'RootQueryType',
      fields: productDataSchema,
    }),
  }),
}));

app.use('/graphql', graphqlMiddleware);

app.listen(4000);

console.log('Running a new elasticsearch GraphQL API server at localhost:4000/graphql');
