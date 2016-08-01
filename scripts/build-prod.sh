#!/usr/bin/env bash

# Clean distribution directory.
rm -rf dist && mkdir dist && mkdir dist/js
# Copy static files to distribution.
cp -r static/* dist

# Duplicate index.html as 200.html for Surge pushState routing.
cp static/index.html dist/200.html

# Bundle the main js file.

# add -d switch for sourcemapping and debugging production.
NODE_ENV=production browserify -e src/index.js -o dist/js/main.js \
  -t envify \
  -t sheetify/transform \
  -g yo-yoify \
  -g unassertify \
  -g es2040 \
  -g uglifyify | uglifyjs

echo 'Built dist directory'
