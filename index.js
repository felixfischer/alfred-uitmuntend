"use strict";

var uitmuntend = require('uitmuntend'),
    fs = require('fs'),
    handlebars = require('handlebars');


var main = function() {
  if (typeof process.argv[2] == "string") {
    uitmuntend.query(process.argv[2], output);
  } else {
    throw "error: no valid query string supplied";
  }
}

var output = function(data) {
  fs.readFile('feedback.tpl.xml', 'utf8', function(err, source) {
    if (err) {
      throw err;
    } else {
      var template = handlebars.compile(source);
      var result = template(data);
      console.log(result);
    }
  });
}

if (require.main === module) {
  main();
}

