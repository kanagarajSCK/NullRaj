FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app and build
COPY . .
RUN npm run build

# Install serve and expose port 3000
RUN npm install -g serve
EXPOSE 3000

# Serve the build on port 3000 explicitly
CMD ["serve", "-s", "build", "-l", "3000"]
