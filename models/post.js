var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  content: [{required: true, type: String}],
  title: {required: true, type: String}
});

module.exports = mongoose.model('Post', PostSchema);
