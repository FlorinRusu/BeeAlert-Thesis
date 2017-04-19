var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require("http");
var fileSystem = require("fs");

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// specify the port
var port = process.env.PORT || 3003;


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// create server at specified port
var server = http.createServer(function(req, resp){
   fileSystem.readFile('./views/index.html',function(error,fileContent){
       if(error){
           resp.writeHead(500,{'Content-Type':'text/plain'});
           resp.end('Error');
       }
       else{
           resp.writeHead(200,{'Content-Type':'text/html'});
           resp.write(fileContent);
           resp.end();
       }
   });
});

server.listen(port);
console.log('Listening at: localhost:'+port);

module.exports = app;
