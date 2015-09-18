'use strict';

let fs = require('fs');

module.exports = function(path, options) {
    options = options || {};
    options.encoding = options.encoding || 'utf8';

    return fs.readFileSync(path, options);
};
