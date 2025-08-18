# Stage 1: Build the project
FROM node:18-alpine AS builder

WORKDIR /build

# Install only production dependencies initially
COPY package*.json ./
RUN npm ci

# Copy the rest of the project and build
COPY . .
RUN npm run build

# Remove dev dependencies to reduce size
RUN npm prune --omit=dev

# Stage 2: Create the lightweight production image
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/public ./public
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package*.json ./

# Port used by the Node.js app
EXPOSE 3000

# Start the production server
CMD ["node", "dist/server.js"]