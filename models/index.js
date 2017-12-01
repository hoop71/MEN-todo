// require mongoose
var mongoose = require('mongoose');
// debug true - see info in console
mongoose.set('debug', true);
// connect to mongodb
mongoose.connect('mongodb://localhost/todo-api');

// allows to use Promise syntax
mongoose.Promise = Promise; 

module.exports.Todo = require("./todo");