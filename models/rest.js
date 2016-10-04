var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    rating: {type: Number, required: true},
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Restaurant', schema);
