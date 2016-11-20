var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  userId: {type: String, required: true},
  restId:{type:String, required:true}
});

module.exports = mongoose.model('RestList', schema);
