var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

console.log(req.body);
    res.render('index', { title: 'Sign Up Successfully.' });
});

module.exports = router;
