#!/bin/bash

# Check if Node.js is already installed
node_installed=$(command -v node)
npm_installed=$(command -v npm)

if [ -x "$node_installed" ] && [ -x "$npm_installed" ]; then
  node_version=$(node -v)
  npm_version=$(npm -v)
  echo "Node.js is already installed. Version: $node_version"
  echo "npm is already installed. Version: $npm_version"
else
  # Download Node.js installation script
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
  # Install Node.js and npm
  sudo apt-get install -y nodejs

  # Verify the installation
  node_version=$(node -v)
  npm_version=$(npm -v)

  if [ -x "$node_installed" ] && [ -x "$npm_installed" ]; then
    echo "Node.js installed successfully. Version: $node_version"
    echo "npm installed successfully. Version: $npm_version"
  else
    echo "Failed to install Node.js and npm."
  fi
fi
