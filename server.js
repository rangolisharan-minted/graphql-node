var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
	type Query{
		hello: String
		goodbye: String
	}
`);

// The reoot provides a resolver function for each API endpoint

var root = {
	hello: () => {
		return 'Hello world!';
	},
	goodbye: () => {
		return 'Goodbye cruel world!';
	}
};

var app = express();
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true, // Automatically loads a Frontend tool for doing gql queries
}));

app.listen(4000);

console.log('Runng Graphql api server at localhost:4000/graphql');