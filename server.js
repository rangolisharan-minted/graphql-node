const esGraphQL = require('elasticsearch-graphql');
const graphql = require('graphql');
const hitsSchema = require('./src/hits-schema.js');
const graphqlHTTP = require('express-graphql');

const mapping = require('./src/product/product-mapping-stripped.js');

const request = require('request');
const express = require('express');
const cors = require('cors');

const JSONinterceptor = require('./src/tools/json-interceptor.js');

const app = express();

const port = 4000;

const elasticSearchHost = process.env.ELASTICSEARCH_HOST ? 
 'http://' + process.env.ELASTICSEARCH_HOST + ':' + process.env.ELASTICSEARCH_PORT
 : 'http://localhost:9200';
// Construct a schema, using GraphQL schema language

const esCallback = function( body ){

  const hit = body.hits.hits[0];

  return new Promise(function(resolve, reject){

    if(!hit._source.variants.length){
      resolve(body);
      return;
    }

    const defaultVariantId = hit._source.variants[0];

    request.get({
      uri: [ elasticSearchHost, 'variant', 'variant', defaultVariantId].join('/'),
      json: true,
    }, function( err, res, variant ){

      if(err) return reject(err)
      if(variant.error) return reject(variant.error.reason)

      hit._source.default_variant = variant._source;

      return resolve(body);

    });

  });
};

const productDataSchema = esGraphQL({
  graphql,
  name: 'productData',
  _source: true,
  mapping,
  hitsSchema,
  elastic: {
    host: elasticSearchHost,
    index: 'product',
    type: 'product',
    query(query) {
      return query;
    },
  },
  esCallback
})

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
