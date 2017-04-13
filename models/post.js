var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  content: {required: true, type: String},
  title: {required: true, type: String},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', PostSchema);
