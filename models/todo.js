// require mongoose
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date, 
        default: Date.now
    }
});

// puts schema into model
var Todo = mongoose.model('Todo', todoSchema);

// exports for use elsewhere
module.exports = Todo;

