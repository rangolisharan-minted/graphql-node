const fs = require('fs');
const generateSchema = require('json-to-graphql');
const exampleJSON = require('./example-product');

const schema = generateSchema(exampleJSON);
fs.writeFile('example-schema.js', schema, console.log);
