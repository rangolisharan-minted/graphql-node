const esGraphQL = require('elasticsearch-graphql');
const graphql = require('graphql');
const hitsSchema = require('./schema');
const graphqlHTTP = require('express-graphql');

const mapping = require('./product/product-mapping-stripped.js');

const express = require('express');
const cors = require('cors');

const interceptor = require('express-interceptor');

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

const interceptorJSON = interceptor( function(req, res, next){

  return {
    isInterceptable() {
      return req.headers.accept.toLowerCase().indexOf('application/json') > -1;
    },

    intercept(body, send) {
      console.log('intercepting')
      var _body = JSON.parse(body);
      console.log(_body.data.productData.hits);

      _body.data.productData.hits.forEach(function(hit){
        console.log(hit)
        try {
          hit.default_variant = JSON.parse( hit.default_variant );
        } catch (e) {
          throw (e);
        }
        try {
          hit.options = JSON.parse( hit.options );
        } catch (e){
          throw(e);
        }
        try {
          hit.description = JSON.parse( hit.description );
        } catch (e) {
          throw(e);
        }
      });

      var strBody = JSON.stringify(_body);

      send( strBody );

    },
  };

});

app.use( interceptorJSON );

app.use('/graphql', graphqlMiddleware);

app.listen( port );

console.log('Running a new elasticsearch GraphQL API server at localhost:' + port + '/graphql');
