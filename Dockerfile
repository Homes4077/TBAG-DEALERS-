# Stage 1: Build the React application
# Use a Node.js image to build the React project.
# We choose a specific version (e.g., 18-alpine) for consistency and a smaller base image.
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first.
# This allows Docker to cache the 'npm install' step if your dependencies haven't changed.
COPY package.json ./
COPY package-lock.json ./

# Install project dependencies
# The '--force' flag is sometimes used to resolve dependency conflicts, but remove if not needed.
# RUN npm install --force
RUN npm install

# Copy the rest of your application code into the container
# This includes your 'src' folder, 'public' folder, etc.
COPY . .

# Build the React application for production.
# This command generates the optimized static files in the 'build' directory.
# Ensure your package.json has a "build" script, typically "react-scripts build".
RUN npm run build

# Stage 2: Serve the built application with a lightweight Node.js server
# We use another Node.js image, again preferring an alpine version for size.
FROM node:18-alpine

# Set the working directory for the serving stage
WORKDIR /app

# Copy only the built static assets from the 'build' stage to the new stage.
# This keeps the final Docker image small as it doesn't include development dependencies.
COPY --from=build /app/build ./build

# Install 'serve' globally. 'serve' is a simple static file server.
RUN npm install -g serve

# Expose the port on which the 'serve' application will listen.
# Render will automatically map this internal port to an external one.
EXPOSE 3000

# Define the command to run the application when the container starts.
# 'serve -s build' tells serve to serve the static files from the 'build' directory.
# '-l 3000' tells it to listen on port 3000.
CMD ["serve", "-s", "build", "-l", "3000"]

# Optional: Set a specific user to run the application, improving security.
# USER node
