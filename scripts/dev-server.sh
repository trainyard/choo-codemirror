#!/usr/bin/env bash

NODE_ENV=development budo src/index.js:js/main.js --live \
  --open \
  --host localhost \
  --dir static \
  --pushstate \
  --title cm-wrapper \
  --port 3000 \
  -- -t sheetify/transform -g es2040
