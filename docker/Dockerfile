# Official base image
FROM node:6.10.0

# Install basic networking utilities
RUN \
  apt-get update && \
  apt-get install -y wget net-tools netcat curl && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set useful environment variables
ENV NODE_VERSION=6.10.0
ENV NPM_VERSION=3.10.10
ENV APP_USER=app
ENV HOME=/home/${APP_USER}

# Add a user so that container launches with this user
RUN useradd --user-group --create-home --shell /bin/false ${APP_USER}

# Copy dependencies to /home/app/graphql
COPY package.json npm-shrinkwrap.json $HOME/graphql/

#Let app (user) own its home folder /home/app
RUN chown -R app:app $HOME/*

# Install dependencies as app
USER ${APP_USER}
WORKDIR $HOME/graphql
RUN npm install

# Copy source files to /home/app and give permissions
USER root
COPY . $HOME/graphql
RUN chown -R app:app $HOME/*
USER app

# Start node server
CMD ["node", "server.js"]
