'use strict';

var fs = require('fs-extra');
var path = require('path');
var ramlParser = require('raml-1-parser');
var recursive = require('recursive-readdir');
var refParser = require('json-schema-ref-parser');

fs.removeSync('./dist');

fs.mkdirsSync('./dist/model');
fs.mkdirsSync('./dist/samples');
fs.mkdirsSync('./dist/styles');

recursive('./src/model', function (err, files) {
    var promises = [];

    for (var i = 0, len = files.length; i < len; i++) {
        var file = files[i];
        if ('yaml' !== file.split('.').pop()) {
            continue;
        }

        var parser = new refParser();

        (function (file) {
            promises.push(parser.bundle(file).then(function (schema) {
                var jsonFile = './dist/model/' + file.slice(10, (file.length - 4)) + 'json';
                var json = JSON.stringify(schema, null, 4) + '\n';
                fs.writeFileSync(jsonFile, json);
                return jsonFile;
            }).catch(function (error) {
                console.error(error);
                process.exit(1);
            }).then(function (jsonFile) {
                // Bundle again due to https://github.com/BigstickCarpet/json-schema-ref-parser/issues/24
                var parser = new refParser();
                return parser.bundle(jsonFile).then(function (schema) {
                    var json = JSON.stringify(schema, null, 4) + '\n';
                    fs.writeFileSync(jsonFile, json);
                })
            }));
        }(file))
    }

    Promise.all(promises).then(function () {
        var raml = fs.readFileSync('./src/api.raml', 'utf8').replace(/!include \.\.\/dist\//g, '!include ');

        fs.writeFileSync('./dist/api.raml', raml);

        fs.copySync('./LICENSE', './dist/LICENSE');
        fs.copySync('./src/samples', './dist/samples');

        try {
            ramlParser.loadRAMLSync(path.resolve(__dirname, './dist/api.raml'), [], {rejectOnErrors: true});
        } catch (error) {
            console.error(error);
            process.exit(1);
        }

        fs.copy('./node_modules/api-console/dist/fonts', './dist/fonts');
        fs.copy('./node_modules/api-console/dist/img', './dist/img');
        fs.copy('./node_modules/api-console/dist/scripts', './dist/scripts');
        fs.copy('./node_modules/api-console/dist/styles', './dist/styles');
        fs.copy('./src/styles', './dist/styles');
        fs.copy('./src/index.html', './dist/index.html');
        fs.copy('./src/favicon.ico', './dist/favicon.ico');
    });
});
