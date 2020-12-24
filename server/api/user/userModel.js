var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('user', userSchema);
