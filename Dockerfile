# Use the official Node.js base image
FROM node:18.12.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app will listen on
EXPOSE 3000

# Define how to run your app
CMD ["npm", "run", "dev"]
