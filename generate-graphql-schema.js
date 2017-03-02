const fs = require('fs');
const generateSchema = require('json-to-graphql');
const exampleJSON = require('./example-product-generic.js');

const schema = generateSchema(exampleJSON);
fs.writeFile('graphql-schema.js', schema, console.log);

const generic_resolver = function( node ) {
    console.log(this);
    console.log(node);
    return node._source;
    // body...
}