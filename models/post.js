var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: { required: true, type: String },
  content: { required: true, type: String },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Post', PostSchema);
