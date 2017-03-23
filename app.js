var express = require('express');
var exphbs = require('express-handlebars');
var favicon = require('serve-favicon');
var serveStatic = require('serve-static');
var MongoClient = require('mongodb').MongoClient;
var path = require('path');

var app = express();

app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.use(serveStatic(path.join(__dirname, 'public')))
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

MongoClient.connect('mongodb://localhost:27017/quiteplace', function(err, db) {
	if(err) {
		throw err;
	}

	app.get('/', function (req, res) {
	  res.render('home');
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
});
