'use strict';

let glob = require('glob');

let modules = glob.sync(__dirname + '/!(index).js').map(function(path) {
    return require(path);
});

module.exports = function(app) {
    modules.forEach(function(registerRoutes) {
        registerRoutes(app);
    });
};
