var express = require('express');
var path = require('path');
var app = express();

var cards = require('./cards');
app.use('/api/cards', cards);

app.listen(process.env.PORT || 3001, function () {
    console.info('The server is listening at port ' + (process.env.PORT || 3001));
});
