const graphql = require('graphql');
const productSchema = require('./graphql-schema.js');

module.exports = {
  resolve(res, params, data) {
    console.log('Will fetch', res.hits.hits.map(hit => hit._id).join(', '), 'from anywhere');
    return new Promise((resolve, reject) => {
      resolve(res.hits.hits);
    });
  },
  args: {
  },
  type: new graphql.GraphQLList( productSchema ),
};
