require('./configuration/config');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const routes = require('express').Router();


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

console.log(path.join(path.resolve(__dirname , '../dist/'),'index.html'));
app.use('/api/users', userRouter);

app.use('/api/products',productsRouter);

app.use('/api/orders',orderRouter);

app.use( express.static(path.resolve(__dirname, '../dist')));
app.get('*', function (req, res) {

  res.sendFile(path.join(path.resolve(__dirname , '../dist/'),'index.html'));
});

module.exports = app;
