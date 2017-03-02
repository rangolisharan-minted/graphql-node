const graphql = require('graphql');

module.exports = fieldGenerator;

function fieldGenerator( esExampleJson ) {
  //
  // should return graphql structured elasticsearch JSON result
  //
  const fields = {};
  const GraphQLfields = recursiveTraverser( esExampleJson, fields );

  return fields;

}

function recursiveTraverser( obj, fields ){
  // 
  // recurs
  // 
  

  Object.keys(obj).forEach(key => {
    const prop = obj[key];
    if (!prop) return;
    switch (true) {
      case Array.isArray( prop ):
        return {
          type: new graphql.GraphQLList({
            fieldGenerator( prop )
          })
        }
        break;
      case typeof prop === 'object':
        return {
          type: new graphql.GraphQLObjectType({
            name: 'Object',
            description: 'Generated Object from ' + key
          })
        }
        break;
      case typeof prop === 'string':
        return {
          type: graphql.GraphQLString,
          resolve( node ){

          }
        }
        break;
      case typeof prop === 'number':
        break;
      default:
        break;
    }
  });

}
