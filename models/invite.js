var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId: {type:String, required: true},
    friendId: {type: String, required: true},
    restName: {type: String, required: true},
    restAddress: {type: String, required: true},
    timeAndDate:{type: String, required:true},
});

module.exports = mongoose.model('Invite', schema);
