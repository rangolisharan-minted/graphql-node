const esGraphQL = require('elasticsearch-graphql');
const graphql = require('graphql');
const hitsSchema = require('./src/hits-schema.js');
const graphqlHTTP = require('express-graphql');

const mapping = require('./src/product/product-mapping-stripped.js');

const express = require('express');
const cors = require('cors');

const JSONinterceptor = require('./src/tools/json-interceptor.js');

const app = express();

const port = 4000;
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
    query(query) {
      return query;
    },
  },
  hitsSchema,
});

const graphqlMiddleware = graphqlHTTP(request => ({
  context: request,
  graphiql: true, // toggles GUI on /graphql
  schema: new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        productData: productDataSchema,
      },
    }),
  }),
}));

app.use(cors());
app.use(JSONinterceptor);
app.use('/graphql', graphqlMiddleware);

app.listen(port);

console.log(`Running a new elasticsearch GraphQL API server at localhost:${port}/graphql`);
