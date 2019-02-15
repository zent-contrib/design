#!/bin/sh

ns="node-sass --importer node_modules/node-sass-magic-importer/dist/cli.js"

# transpile scss to css
# custom importer for @import '~some-node-module'
$ns src/styles/index.scss css/index.css -q
$ns demo/src/styles/components/index.scss css/components.css -q