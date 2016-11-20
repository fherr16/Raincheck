var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Rest = require('../models/rest');
var RestList = require('../models/restList');

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
