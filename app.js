#!/usr/bin/env node
//
// app.js
// App starter
// Created by porthunt on 04/22/2017
//

var express = require('express');
var app = express();

// config environment
var conf = require('./server/config/' + app.get('env') + '.js');
app.use(express.static(__dirname + 'client'));

// availables routes
require('./server/routes/default.js')(app);
require('./server/routes/err.js')(app);

if (app.get('env') === 'development') {
            app.listen(conf.server.port, conf.server.host);
} else { app.listen(); }

console.log("> Running on http://" + conf.server.host +
            ":" + conf.server.port + "/ (Press CTRL+C to quit)");
