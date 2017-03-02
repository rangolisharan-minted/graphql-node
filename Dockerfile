FROM node:6.10.0

RUN \
  apt-get update && \
  apt-get install -y wget net-tools netcat curl && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENV NODE_VERSION=6.10.0
ENV NPM_VERSION=3.10.10
ENV APP_USER=app
ENV HOME=/home/${APP_USER}

RUN useradd --user-group --create-home --shell /bin/false ${APP_USER}

COPY package.json npm-shrinkwrap.json $HOME/graphql/
RUN chown -R app:app $HOME/*

USER ${APP_USER}
WORKDIR $HOME/graphql
RUN npm install

EXPOSE 4000

CMD ["node", "server.js"]
