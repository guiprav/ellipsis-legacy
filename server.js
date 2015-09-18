#!/usr/bin/env node
'use strict';

let express = require('express');
let app = express();

let registerRoutes = require('./routes');

registerRoutes(app);

app.listen(process.env.PORT || 3000);
