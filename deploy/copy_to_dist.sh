#!/usr/bin/env bash

cp -R ./public/* ${1:-"dist"}
rm ./dist/statoscope-report.html
rm ./dist/build-stats.json

cp ./src/lib/rlottie/rlottie-wasm.js ${1:-"dist"}
cp ./src/lib/rlottie/rlottie-wasm.wasm ${1:-"dist"}
