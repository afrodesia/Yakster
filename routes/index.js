const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/create-zone', function(req, res, next) {
  res.render('create-zone', { title: 'Express - Create Zone' });
});

router.get('/create-comment', function(req, res, next) {
  res.render('create-comment', { title: 'Express - Create Comment' });
});

module.exports = router;
