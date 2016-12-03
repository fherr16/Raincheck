var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Invite = require('../models/invite');

router.post('/', function(req, res, next) {
   var invite = new Invite({
       userId: req.body.userId,
       friendId: req.body.friendId,
       restName: req.body.restName,
       restAddress: req.body.restAddress,
       timeAndDate: req.body.timeAndDate
   });
    invite.save(function(err, result) {
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

router.get('/:id', function(req, res, next) {
  Invite.find({userId: req.params.id})
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

router.delete('/:id', function(req, res){
  Invite.remove({_id: req.params.id}, function(err,result)
  {
    res.status(200).json({
      message:'Success',
      obj: result
    });
  })
});

module.exports = router;
