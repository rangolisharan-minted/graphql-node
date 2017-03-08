const graphql = require('graphql');
const productSchema = require('./product/graphql-schema-product.js');

module.exports = {
  resolve(res, params, data) {
    return new Promise((resolve, reject) => {
      resolve(res.hits.hits);
    });
  },
  args: {
  },
  type: new graphql.GraphQLList(productSchema),
};
