#!/usr/bin/env node

const greet = require('./index');
const [,, name] = process.argv;

console.log(greet(name || 'world'));
