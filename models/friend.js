var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var schema = new Schema({
    firstName: {type: String, required: true},
    userId: {type: Number, required: true}
});


module.exports = mongoose.model('Friend', schema);