'use strict';

let fs = require('fs');
let path = require('path');
let basename = path.basename;
let glob = require('glob');
let hbs = require('handlebars');
let readFileSync = require('./readFileSync');
let themePath = require('./themePath');

glob.sync(themePath + '/partials/*.hbs').forEach(function(path) {
    hbs.registerPartial(
        basename(path, '.hbs'),
        readFileSync(path)
    );
});

glob.sync(themePath + '/templates/*.hbs').forEach(function(path) {
    exports[basename(path, '.hbs')] = hbs.compile(readFileSync(path));
});
