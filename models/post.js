var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  content: String,
  title: String,
});

module.export = mongoose.model('Post', PostSchema);
