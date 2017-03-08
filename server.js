const esGraphQL = require('elasticsearch-graphql');
const graphql = require('graphql');
const hitsSchema = require('./schema');
const graphQLSchema = require('./graphql-schema.js');
const graphqlHTTP = require('express-graphql');

const express = require('express');
const cors = require('cors');

const mapping = require('./product-mapping-stripped.js');

const app = express();

const JSONparser = require('./json-parser.js');

const elasticSearchHost = process.env.ELASTICSEARCH_HOST ? 
 'http://' + process.env.ELASTICSEARCH_HOST + ':' + process.env.ELASTICSEARCH_PORT
 : 'http://localhost:9200' 
// Construct a schema, using GraphQL schema language

const productDataSchema = esGraphQL({
  graphql,
  name: 'productData',
  mapping,
  elastic: {
    host: elasticSearchHost,
    index: 'product',
    type: 'product',
    query(query, context) {
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
      fields: {
        productData: productDataSchema,
      },
    }),
  }),
}));

app.use('/graphql', graphqlMiddleware);
// app.use('/graphql', JSONparser);

app.listen(4000);

console.log('Running a new elasticsearch GraphQL API server at localhost:4000/graphql');
