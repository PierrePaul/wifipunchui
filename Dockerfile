FROM node:alpine
COPY ./package.json /wifipunchui/package.json
COPY ./package-lock.json /wifipunchui/package-lock.json
WORKDIR /wifipunchui
RUN npm install
COPY . /wifipunchui
RUN npm run build
CMD cp -r dist/* /build
