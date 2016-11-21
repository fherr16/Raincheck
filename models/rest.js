var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId: {type:String, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    rating: {type: Number, required: true},
});

module.exports = mongoose.model('Rest', schema);
