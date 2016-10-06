var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Rest = require('../models/rest');

router.post('/', function(req, res, next) {
   var restaurant = new Rest({
       name: req.body.name,
       address: req.body.address,
       rating: req.body.rating
   });
    restaurant.save(function(err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        });
    });
});

module.exports = router;
