#!/bin/bash

set -e

DOCKERHOST=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" |\
 grep -v 127.0.0.1 |\
 awk '{ print $2 }' |\
 cut -f2 -d: | head -n1)\
 docker-compose -f docker/docker-compose.yml -f docker/docker-compose.dev.yml run --rm graphql /bin/bash
