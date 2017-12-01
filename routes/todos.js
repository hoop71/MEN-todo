var express = require('express'),
    helpers = require('../helpers/todos'),
     router = express.Router(),
         db = require("../models");
 

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);

router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;