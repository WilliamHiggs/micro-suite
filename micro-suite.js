#!/usr/bin/env node

const checkArgs = () => {
  return new Promise((resolve, reject) => {
    var args = process.argv.slice(2);
    module.exports = args;
    if (args.length === 0) {
      var reason = new Error("no arguments given");
      reject(reason);
    } else {
      resolve(true);
    }
  });
};

checkArgs()
  .then(resolve => {
    var runTests = require("./testRunner.js");
  })
  .catch(error => console.log(error.message));
