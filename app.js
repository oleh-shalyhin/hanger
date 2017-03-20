var express = require('express');
var exphbs = require('express-handlebars');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();

app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.engine('handlebars', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.send('Home page');
});

app.post('/signup', function(req, res) {

});

app.post('/login', function(req, res) {

});


app.get('/find', function(req, res) {
	res.send('find');
});

app.route('/friends')
	.get(function(req, res) {
		res.send('friends');
	})
	.post(function(req, res) {

	})
	.delete(function(req, res) {

	});

app.route('/albums')
	.get(function(req, res) {
		res.send('albums');
	})
	.post(function(req, res) {

	})
	.delete(function(req, res) {

	});

app.route('/albums/:albumId')
	.get(function(req, res) {
		res.send('albums/:albumId');
	})
	.post(function(req, res) {

	})
	.delete(function(req, res) {

	});

app.post('/albums/:albumId/cover', function(req, res) {

});

app.route('/:userId')
	.get(function(req, res) {
		res.send(':userId');
	})
	.post(function(req, res) {

	});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});