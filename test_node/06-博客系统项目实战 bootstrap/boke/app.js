var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require("express-session");

/*-------引入操作数据的模块 mongoose------------*/
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test1706");
/*-------引入操作数据的模块 mongoose------------*/
var routes = require('./routes/index');
var users = require('./routes/users');

/*------- 自定义路由------------*/
var register = require("./routes/register");
var  login = require("./routes/login");
var article = require("./routes/article");
var detail = require("./routes/detail");


var user = require("./routes/user");
/*------- 自定义路由------------*/
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//--------注册express-ession (中间件)----------------
app.use(session({
    name: "kerwinNodeSessID",
    secret:"dwadjioj",
    cookie: {maxAge: 1000*3600 }, //1小时
    resave: true,
    saveUninitialized: true
}));  

//----------------------



app.use('/', routes);
app.use('/users', users);


/*------- 注册自定义的路由------------*/
app.use("/register",register);

app.use("/login",login);

app.use("/article",article);

app.use("/detail",detail);

app.use("/user",user);

/*------- 注册自定义的路由------------*/
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


module.exports = app;
