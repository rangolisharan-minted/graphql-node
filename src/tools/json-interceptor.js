const interceptor = require('express-interceptor');

const stringifiedGraphqlProps = require('../product/stringified-props.js');
// import the props that are stringified by our schema

module.exports = interceptor(req =>
  //
  // interceptor for parsing stringified properties to send a fully JSONified body
  //
   ({
     isInterceptable() {
       return req.headers.accept.toLowerCase().indexOf('application/json') > -1;
     },

     intercept(body, send) {
       const objBody = JSON.parse(body);

       objBody.data.productData.hits.forEach((hit) => {
         stringifiedGraphqlProps.forEach((propVal) => {
           try {
             hit[propVal] = JSON.parse(hit[propVal]);
           } catch (e) {
             throw (e);
           }
         });
       });

       const strBody = JSON.stringify(objBody);

       send(strBody);
     },
   }));
