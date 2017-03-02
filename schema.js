const graphql = require('graphql');
const productSchema = require('./graphql-schema.js');

// todo - get product JSON structure from url of elasticsearch result

module.exports = {
  resolve(res, params, data) {
    console.log('Will fetch', res.hits.hits.map(hit => hit._id).join(', '), 'from anywhere');
    return new Promise((resolve, reject) => {
      resolve(res.hits.hits);
    });
  },
  args: {
  },
  type: new graphql.GraphQLList(new graphql.GraphQLObjectType({
    name: 'HitSchema',
    description: 'This is just an raw example schema',
    fields() {
      console.log('fields test');
      return {
        id: {
          type: graphql.GraphQLString,
          resolve(node) {
            return node._id;
          },
        },
        index: {
          type: graphql.GraphQLString,
          resolve(node) {
            return node._index;
          },
        },
        type: {
          type: graphql.GraphQLString,
          resolve(node) {
            return node._type;
          },
        },
        data: {
          type: new graphql.GraphQLObjectType({
            name: 'productDataSchema',
            description: 'product data',
            fields: productSchema,
          }),
        },
      };
    },
  })),
};
