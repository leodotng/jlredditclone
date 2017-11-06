var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var routes = require('./routes/index');
var path = require('path');

// var handlebars = require('handlebars');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next) => {
  res.render('index');

})

// app.use('/', routes);
app.listen(3000, (req, res) => {
  console.log('its working')
})

module.exports = app;


// app.set('view engine', 'hbs');
//
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
//
//
// app.use('/', routes);
//
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
