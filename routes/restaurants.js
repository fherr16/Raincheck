var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Restaurant = require('../models/rest');

router.post('/', function(req, res, next) {
   var restaurant = new Restaurant({
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

router.get('/', funtion(req, res, next){
  Restaurant.find()
  .populate('rest', 'name', 'address', 'rating')
  .exec(function(err,docs){
    if(err){
      return res.status(404).json({
        title: "An error occurred",
        error: err
      });
    }
    res.status(200).json({
      message: "Success",
      obj: docs
    });
  });
});

module.exports = router;
