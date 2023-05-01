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
  # Install Homebrew (if not already installed)
  if ! command -v brew >/dev/null; then
    echo "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  fi

  # Install Node.js and npm using Homebrew
  echo "Installing Node.js and npm..."
  brew install node

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
