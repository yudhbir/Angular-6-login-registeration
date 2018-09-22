var express = require('express');
var bodyParser = require('body-parser');
var cors 	   = require('cors')
var index = require('./server/routes/index');

var app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1/', index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;