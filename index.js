"use strict";

var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs'),
    handlebars = require('handlebars'),
    unorm = require('unorm'),
    iconv = require('iconv-lite');

var endpoint = 'http://www.uitmuntend.de/search.html?search=';

var fetch = function(word) {
  // re-normalize search string (re-compose decomposed characters) and escape
  var reqUrl = endpoint + escape(unorm.nfc(word));
  var options = {'uri': reqUrl, 'encoding': null};
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parse(iconv.decode(body, 'iso-8859-1'));
    } else if (error) {
      log("error fetching " + reqUrl);
    } else {
      log(response);
    }
  })
}

var parse = function(body) {
  var res = {'translations': []};
  var $ = cheerio.load(body);
  var trs = $('.t2 tbody tr').filter(function(i, el) {
    return el.children.length == 5;
  });
  for (var i = 0, len = trs.length; i < len; i++) {
    var tds = $(trs[i]).children();
    res.translations.push({
      'original': clean($(tds[0]).text()),
      'translation': clean($(tds[1]).text())
    });
  }
  return output(res);
};

var clean = function(item) {
  if (item.substr(item.length-2) == ' |') {
    item = item.substr(0, item.length-2);
  };
  return item;
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

var main = function() {
  if (typeof process.argv[2] == "string") {
    fetch(process.argv[2]);
  }
}

if (require.main === module) {
  main();
}

