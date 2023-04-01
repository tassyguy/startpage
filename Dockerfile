# Use a lightweight Linux distribution
FROM alpine:latest

# Set working directory for the container
WORKDIR /app

# Install required dependencies
RUN apk update && \
    apk add --no-cache nodejs npm

# Copy project files into the container
COPY . .

# Install project dependencies
RUN npm install

# Build the React project
RUN npm run build

# Expose the port for the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
