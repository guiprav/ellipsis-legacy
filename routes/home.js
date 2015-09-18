'use strict';

let templates = require('../lib/templates');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send(templates.home());
    });
};
