# Alfred Workflow for uitmuntend.de

[![Build Status via Travis CI](https://api.travis-ci.org/felixfischer/alfred-uitmuntend.svg?branch=master)](https://travis-ci.org/felixfischer/alfred-uitmuntend)

Quickly access the German/Dutch dictionary of [uitmuntend.de](http://www.uitmuntend.de/) via the Alfred 2.0 command bar.

![Screenshot](https://github.com/felixfischer/alfred-uitmuntend/blob/master/screenshot.png?raw=true)

## Requirements

- [Alfred 2.0](http://www.alfredapp.com/)
  (OS X productivity app)
- [node.js](http://nodejs.org/)
  ([download installer](http://nodejs.org/download/)
  or use homebrew: `brew install node`)

## Installation

Make sure you have node.js installed and run this command in a terminal:

```
npm install -g alfred-uitmuntend
```

Alfred will pop open and ask to complete the installation. After that is done
the installer package can be removed by running `npm un -g alfred-uitmuntend`.

## Usage

In Alfred use the keywords **nl** and **de** followed by the word you want to
look up in the dictionary. Examples:

- `nl gehen` --> get dutch translations of german *gehen*
- `de lopen` --> get german translations of dutch *lopen*

## Contribute

Feel free to submit a pull request or send me an email if you have an idea.

## License

The MIT License (MIT)

Copyright (c) 2014 Felix Fischer <kontakt@felixfischer.com> (felixfischer.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
