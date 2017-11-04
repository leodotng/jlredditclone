var express = require('express');
// var bodyParser = require('body-parser');

// var routes = require('./routes/index');

const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, (req, res) => {
  console.log('its working')
})


// app.set('views', path.join(__dirname, 'views'));
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
