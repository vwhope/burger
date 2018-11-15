var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

// serve static content from public dir
app.use(express.static('public'));

// parse req.body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// handlebars setup
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// do I need this? If YES, must install and require path
// app.set('views', path.join(__dirname, 'views'));

// import routes
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

// start listening for user requests
app.listen(PORT, function() {
    console.log('App now listening at localhost:' + PORT);
});