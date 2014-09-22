"use strict";

var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs'),
    handlebars = require('handlebars'),
    iconv = require('iconv-lite');

var fetchUrl = function(reqUrl) {
  var options = {'uri': reqUrl, 'encoding': null};
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parseHtml(iconv.decode(body, 'iso-8859-1'));
    } else if (error) {
      log("error fetching " + reqUrl);
    } else {
      log(response);
    }
  })
}

var parseHtml = function(body) {
  var res = {'translations': []};
  var $ = cheerio.load(body);
  var trs = $('.t2 tbody tr').filter(function(i, el) {
    return el.children.length == 5;
  });
  for (var i = 0, len = trs.length; i < len; i++) {
    var tds = $(trs[i]).children();
    res.translations.push({
      'original': cleanResult($(tds[0]).text()),
      'translation': cleanResult($(tds[1]).text())
    });
  }
  return outputResults(res);
};

var cleanResult = function(item) {
  if (item.substr(item.length-2) == ' |') {
    item = item.substr(0, item.length-2);
  };
  return item;
}

var outputResults = function(data) {
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
  var lang = process.argv[2],
      word = process.argv[3];
  if (typeof word == "string") {
    switch(lang) {
      case 'nl':
        fetchUrl('http://www.uitmuntend.de/woerterbuch/' + word + '/');
        break;
      case 'de':
        fetchUrl('http://www.uitmuntend.de/woordenboek/' + word + '/');
        break;
    }
  }
}

if (require.main === module) {
  main();
}

