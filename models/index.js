// require mongoose
var mongoose = require('mongoose');
// debug true - see info in console
mongoose.set('debug', true);
// connect to mongodb

mongoose.connect(process.env.DATABASEURL);
// mongoose.connect('mongodb://localhost/todo-api');
// mongodb://hoop71:asdfasdf1@ds129776.mlab.com:29776/node-todo-mh

// allows to use Promise syntax
mongoose.Promise = Promise; 

module.exports.Todo = require("./todo");

