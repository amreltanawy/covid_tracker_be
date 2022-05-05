require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var connectTodb =require('./config/db')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


connectTodb().then(()=>{
    console.log("successfully connected to database")
}).catch(()=>{
    console.error("failed to connect to database")
})
var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.options('*', cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
