var express = require('express');
var exphbs = require('express-handlebars');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();

app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.engine('handlebars', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
