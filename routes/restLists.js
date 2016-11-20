var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var RestList = require('../models/restList');

router.post('/', function(req, res, next) {
   var restList = new RestList({
       userId: req.body.userId,
       restId: req.body.restId,
   });
    restList.save(function(err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Success',
            obj: result
        });
    });
});

router.delete('/:id', function(req, res){
  RestList.remove({_id: req.params.id}, function(err,result)
  {
    res.status(200).json({
      message:'Success',
      obj: result
    });
  })
});

router.get('/', function(req, res, next) {
  RestList.find()
  .exec(function(err, docs)
  {
    if(err){
      return res.status(404).json({
        title: "Not Found",
        error: err
      });
    }
    res.status(200).json({
      message: "Success",
      obj: docs
    });
  })
})

module.exports = router;
