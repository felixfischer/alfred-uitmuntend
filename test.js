"use strict";

var exec = require('child_process').exec;

var assert = function(condition, msg) {
  if (condition === true) {
    console.log("PASS: " + msg);
  }
  else {
    console.log("FAIL: " + msg);
    console.log("\nSTOP: test execution failed");
    process.exit(1);
  }
}

var shellCmd = 'node index.js nachschlagen';

exec(shellCmd, function(error, stdout, stderr) {
  assert(error === null, 'shell.exec("' + shellCmd + '") exits with code 0');
  assert(stdout.indexOf('opzoeken') > -1, 'ouput contains expected word');
  assert(stdout.indexOf('<?xml version="1.0"?>') > -1, 'XML docstring present');
  console.log("\nGOOD: all tests passed");
});

