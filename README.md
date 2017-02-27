***
If you get:
```
Error: Can only create List of a GraphQLType but got: undefined.
```

It is likely that your mapping is using the wrong data types e.g. "text" instead of "string"


Example working query using the following elasticsearch data
```
{
    "title": "The Godfather",
    "director": "Francis Ford Coppola",
    "year": 1972,
    "genres": ["Crime", "Drama"]
}
```


```
{
  movieSearch(query: "the godfather", filters:{
    director:{
      values: "ford"
    }
  }) {
    hits{
      id
      index
      type
    }
    aggregations{
      title{
        terms{
          value,
          count
        }
      }
      director{
        terms{
          value,
          count
        }
    	}
    }
  }
}
```