var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var addcloud = require('./routes/addcloud');
var AmazonDrive = require('./routes/AmazonDrive');
var blank = require('./routes/blank');
var buttons = require('./routes/buttons');
var Dropbox = require('./routes/Dropbox');
var explorer = require('./routes/explorer');
var forms = require('./routes/forms');
var GoogleDrive = require('./routes/GoogleDrive');
var grid = require('./routes/grid');
var icons = require('./routes/icons');
var information = require('./routes/information');
var login = require('./routes/login');
var notifications = require('./routes/notifications');
var OneDrive = require('./routes/OneDrive');
var panels_wells = require('./routes/panels-wells');
var setting = require('./routes/setting');
var tables = require('./routes/tables');
var typography = require('./routes/typography');
var Ucloud = require('./routes/Ucloud');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/auth', function(req, res, next){
  res.render('auth',function(err,js){
    res.send(js);
  })
});
app.use('/index', index);
//app.use('/get_auth_code', get_auth_code);
app.use('/users', users);
app.use('/addcloud', addcloud);
app.use('/AmazonDrive', AmazonDrive);
app.use('/blank', blank);
app.use('/buttons', buttons);
app.use('/Dropbox', Dropbox);
app.use('/explorer', explorer);
app.use('/forms', forms);
app.use('/GoogleDrive', GoogleDrive);
app.use('/grid', grid);
app.use('/icons', icons);
app.use('/information', information);
app.use('/login', login);
app.use('/notifications', notifications);
app.use('/OneDrive', OneDrive);
app.use('/panels-wells', panels_wells);
app.use('/setting', setting);
app.use('/tables', tables);
app.use('/typography', typography);
app.use('/Ucloud', Ucloud);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
