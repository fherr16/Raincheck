var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    message: {type: String, required: true},
    timestamp: {type: Number, required: true},
    userName: {type: String, required: true},
    friendName: {type: String, required: true}
});


module.exports = mongoose.model('Action', schema);