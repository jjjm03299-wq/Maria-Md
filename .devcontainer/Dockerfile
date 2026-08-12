FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install nodemon globally for dev convenience
RUN npm install -g nodemon

# Set the working directory
WORKDIR /workspace

# Copy package files first for dependency install
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . ./

# Default command when opening the codespace
CMD ["/bin/bash"]
