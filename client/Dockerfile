# Stage 1: Build the Vite project
FROM node:18-alpine AS builder

WORKDIR /build

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code and build the project
COPY . .
RUN npm run build

# Stage 2: Serve the built site with `serve`
FROM node:18-alpine AS runner

WORKDIR /app

# Install `serve` globally (required in the final image)
RUN npm install -g serve

# Copy only the built site
COPY --from=builder /build/dist ./dist

# Expose the port Vite build will be served on
EXPOSE 5173

# Start the server
CMD ["serve", "-s", "dist", "-l", "5173"]