***
If you get:
```
Error: Can only create List of a GraphQLType but got: undefined.
```

It is likely that your mapping is using the wrong data types e.g. "text" instead of "string"


For example:

Step 1. Seed elasticsearch with data from example-product.js, it should look like this:
```
{
  sku: 'MIN-004-HYC',
  aggregation_id: 'MIN-004-HYC_MIN-1B7-HPC_MIN-3NB-HMC_MIN-HHS-HMC_MIN-IOZ-HPC_MIN-L64-HYC',
  description: {},
  artist: {
    is_minted_user: false,
    first_name: 'Kaydi',
    last_name: 'Bishop',
    user_id: 228754,
    account_id: 229048,
    product_skus: [],
    url: '/store/kaydibishop',
    philosophy: "Hi, I'm Kaydi! For years I designed interiors of hotels and royal residences around the world. After many life changes I followed my heart and started my own stationery design studio. Now I'm obsessed with anything paper and couldn't be happier!",
    location: {
      visible_location: 'Medford, NJ',
      city: 'Medford',
      state: 'NJ',
      country: 'US',
    },
    commission_request_url: null,
    images: [],
    name: 'Kaydi Bishop',
  }
}
```

Step 2. Run the server with 
```
npm start
```

Step 3. Open a window in the browser to localhost:4000/graphql and enter in the following query

```
{
  productData(query: "MIN-004-HYC",
    fields:[ "sku"] ){
    hits{
      sku
      skus
      attributes{
        artist_user_id
      }
    }
  }
}
```