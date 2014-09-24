"use strict";

var uitmuntend = require('uitmuntend'),
    unorm = require('unorm'),
    fs = require('fs'),
    handlebars = require('handlebars');


var main = function() {
  var word = process.argv[2];
  if (typeof word == "string") {
    word = unorm.nfc(process.argv[2]);
    uitmuntend.query(word, output);
  } else {
    throw "error: no valid query string supplied";
  }
}

var output = function(data) {
  if (typeof data.translations[0] === 'undefined') {
    data = {translations: {
      original: 'geen resultaten',
      translation: 'keine Suchergebnisse'
    }}
  }
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

