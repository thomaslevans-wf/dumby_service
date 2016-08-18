FROM node:6.4.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app deps
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Map app port
EXPOSE 1234

# Command to start the app
CMD ["npm","start"]
