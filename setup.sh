#!/bin/bash
set -e

echo "Installing Jacdac-for-Max dependencies..."
cd "$(dirname "$0")/node_content"
npm install
echo "Done. You can now open jacdac-for-max.maxproj in Max."
