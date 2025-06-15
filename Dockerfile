# syntax=docker/dockerfile:1

# --- Build Stage ---
# This stage builds the React app using Node.js
FROM node:20-slim AS build

# Set the working directory in the container
WORKDIR /app

# Define build-time arguments to be passed in from the 'fly deploy' command.
# These must be passed with --build-arg
ARG VITE_GEMINI_API_KEY
ARG VITE_PORTFOLIO_PASSWORD

# Set the arguments as environment variables, making them accessible to the build script.
ENV VITE_GEMINI_API_KEY=$VITE_GEMINI_API_KEY
ENV VITE_PORTFOLIO_PASSWORD=$VITE_PORTFOLIO_PASSWORD
ENV CACHE_BUSTER=1

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the static assets for production
RUN npm run build


# --- Production Stage ---
# This stage serves the built assets using a lightweight Nginx server
FROM nginx:stable-alpine

# Copy the built assets from the 'build' stage to the Nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# The command to start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]