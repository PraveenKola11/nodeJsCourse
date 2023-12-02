var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');  
const bodyParser = require('body-parser')
const sql = require('mssql')
 


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mobileRouter = require('./routes/mobileRouter');
const postRouter = require('./routes/postRouter'); 
var formRouter = require('./routes/formRouter');
var getRouter = require('./routes/getRouter');
var postRegDetails = require('./routes/postRegDetails')
//var getRouter = require('/routes/getRouter');
var app = express();
 
// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/mobileDetails',mobileRouter);
app.get('/mobileDetails/:name',mobileRouter);
app.get('/getForm',formRouter);
app.get('/postRegDetails',postRegDetails);
app.post('/postRegDetails',postRegDetails);
app.get('/getRouter',getRouter);
//app.get('/getDetails',getRouter)
app.post('/addName',postRouter);
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
