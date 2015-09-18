'use strict';

let express = require('express');
let themePath = require('../lib/themePath');

module.exports = function(app) {
    app.use(express.static(themePath + '/static'));
};
