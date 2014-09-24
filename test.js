"use strict";

var exec = require('child_process').exec,
    libxml = require('libxmljs');

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

var isValidXML = function(str) {
  try {var xml = libxml.parseXml(str)}
  catch (e) {return false}
  finally {return xml.errors.length == 0}
}

exec(shellCmd, function(error, stdout, stderr) {
  assert(error === null, 'shell.exec("' + shellCmd + '") exits with code 0');
  assert(stdout.indexOf('opzoeken') > -1, 'ouput contains expected word');
  assert(stdout.indexOf('<?xml version="1.0"?>') > -1, 'XML docstring present');
  assert(isValidXML(stdout), 'XML is parseable');
  console.log("\nGOOD: all tests passed");
});

