const fs = require('fs');
const generateSchema = require('json-to-graphql');
const exampleJSON = require('./example-product-generic.js');

const schema = generateSchema(exampleJSON);
fs.writeFile('graphql-schema.js', schema, console.log);