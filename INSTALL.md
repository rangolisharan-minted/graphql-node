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
1. Make sure that the docker_start.sh and build.sh scripts are executable:
```
#> chmod +x docker_build.sh
#> chmod +x docker_start.sh
```
3. Run the following command to build your docker container:
```
#> ./docker_build.sh
```
4. Run the following commant to launch the container and start the GraphQL service
#> ./docker_start.sh

# Reflecting changes in the container as you make them:
1. Source changes should be hot reloaded.
2. If you make changes to Dockerfile or docker-compose.yml, then you must re-build and re-start.
3. If you make changes in package.json, or need to run npm install, then ..TODO..

# Helpful commands
1. To get to a bash console in the container with appropriate variables set:
#> ./docker_bash.sh (You should make this an executable as well)
