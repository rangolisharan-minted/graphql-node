const fs = require('fs');
const generateSchema = require('json-to-graphql');
const exampleJSON = require('./example-product-generic.js');

const schema = generateSchema(exampleJSON);
fs.writeFile('graphql-schema-variants.js', schema, console.log);