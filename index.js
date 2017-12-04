var express = require('express'),
 bodyParser = require('body-parser'),
       port = process.env.PORT || 3000,
        app = express();

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile("index.html");
});

console.log(process.env.DATABASEURL);

app.use('/api/todos', todoRoutes);
   
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});
