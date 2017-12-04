// require mongoose
var mongoose = require('mongoose');
// debug true - see info in console
mongoose.set('debug', true);
// connect to mongodb

var url = process.env.DATABASEURL || "mongodb://localhost/todo-api";
mongoose.connect(url);

// allows to use Promise syntax
mongoose.Promise = Promise; 

module.exports.Todo = require("./todo");

