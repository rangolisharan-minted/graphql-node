var esGraphQL = require('elasticsearch-graphql');
var graphql = require('graphql');
var hitsSchema = require('./schema');
var graphqlHTTP = require('express-graphql');

var express = require('express');
var cors = require('cors');

var mapping = require('./mapping');

var app = express();

// Construct a schema, using GraphQL schema language
var movieSearchSchema = esGraphQL({
	graphql,
	name: 'movieSearch',
	mapping,
	elastic: {
		host: 'http://dockerhost:9200',
		index: 'movies',
		type: 'movie',
		query: function(query, context) {
			// debugger
			console.log( query )
			return query;
		}
	},
	hitsSchema
});

app.use(cors());

var graphqlMiddleware = graphqlHTTP( request => ({
	context: request,
  	graphiql: true,
  	schema: new graphql.GraphQLSchema({
  	  query: new graphql.GraphQLObjectType({
  	    name: 'RootQueryType',
  	    fields: {
  	      movieSearch: movieSearchSchema
  	    }
  	  })
  	})
}));

app.use('/graphql', graphqlMiddleware );

app.listen(4000);

console.log('Running a new elasticsearch GraphQL API server at localhost:4000/graphql');