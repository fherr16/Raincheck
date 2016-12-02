var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Action = require('../models/action');

router.post('/', function(req, res, next) {
   var action = new Action({
       message: req.body.message,
       timestamp: req.body.timestamp
   });
    action.save(function(err, result) {
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
  Action.remove({_id: req.params.id}, function(err,result)
  {
    res.status(200).json({
      message:'Success',
      obj: result
    });
  })
});

router.get('/', function(req, res, next) {
  Action.find()
  .exec(function(err, docs) {
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
