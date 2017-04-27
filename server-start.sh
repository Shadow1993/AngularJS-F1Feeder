#!/bin/bash

echo 'NPM Version'
echo npm -v
echo 'If this returned an error, please check if you have node.js installed'

echo 'Downloading dependencies..'
npm i
echo 'Complete!'

echo 'Bower Version'
echo bower -v
echo 'If this returned an error, please check if you have bower installed globally'

echo 'Downloading bower dependencies..'
bower i
echo 'Complete!'

echo 'Starting server..'
gulp server