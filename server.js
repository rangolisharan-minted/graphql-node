const esGraphQL = require('elasticsearch-graphql');
const graphql = require('graphql');
const hitsSchema = require('./schema');
const graphqlHTTP = require('express-graphql');

const mapping = require('./product/product-mapping-stripped.js');

const express = require('express');
const cors = require('cors');

const app = express();

const port = 4000;

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


app.use('/graphql', graphqlMiddleware, function(a,b,c){

  console.log(a, b, c);

});
// app.use('/graphql', JSONparser);

app.listen( port );

console.log('Running a new elasticsearch GraphQL API server at localhost:' + port + '/graphql');
