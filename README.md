eLife Sciences API RAML
=======================

[![Build Status](https://ci--alfred.elifesciences.org/buildStatus/icon?job=library-api-raml)](https://ci--alfred.elifesciences.org/job/library-api-raml/)

This repo contains [RAML 1.0 specifications](https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md) for the eLife Sciences API.

It can be viewed by serving the `dist` folder (eg `npm install && node_modules/.bin/http-server dist`) and viewing in a browser.

## Installation

Install the project dependencies:

    $ npm install
    
## Compilation

    $ node compile.js
    
The compiled contents of `./src/` can be found in `./dist/`.

## Copyright & Licence

This project is [MIT licenced](LICENCE.txt)
