# Pre-requisites

1. You have elasticsearch 2.3.x downloaded on your host (Mac developer laptop).
   a. Also recommended to download compatible Kibana (4.5) and install the kopf and sense plugins.

2. You are able to reach elasticsearch at your private network IP. This looks like 10.x.x.x when you type ifconfig in your terminal. If not then find the elasticsearch.yml file found in the elasticsearch distribution and add this line:
    ```
    network.host: 0.0.0.0
    ```
    To verify, you can navigate to 10.x.x.x:9200 and be able to see JSON response for the elasticsearch service.
3. You have docker installed. This comes with latest boxen. So update it if your laptop was IT provisioned a long time ago.

# Install & Launch 
1. Run the following command to build a Docker image locally:
```
#> docker-compose build
```
2. Make sure that graphql_start.sh is executable:
```
#> chmod +x start.sh 
```
3. Run the following command to bring up your docker container and launch the GraphQL service:
```
#> ./start.sh
```
