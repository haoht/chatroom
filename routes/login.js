const express = require('express');
const router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'LOGIN' });
});

module.exports = router;
