var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/javascript', function(req, res, next) {
  res.render('javascript');
});


module.exports = router;
