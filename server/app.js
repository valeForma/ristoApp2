require('./configuration/config');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var {userRouter} = require('./routes/usersRoutes');
var {mongoose} = require('./database/mongoose');
var {productsRouter} = require('./routes/productsRoute');
var {orderRouter} =require('./routes/orderRoutes')

var app = express();

// view engine setup
console.log('dirname is :  '+ __dirname);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});


app.use('/api/users', userRouter);

app.use('/api/products',productsRouter);

app.use('/api/orders',orderRouter);

app.use('/', express.static(path.join(__dirname, '../dist')));

module.exports = app;
