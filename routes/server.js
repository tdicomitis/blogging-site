var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var postsRouter = require('./routes/post');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogging-site');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.set('port', process.env.PORT || 3001);

app.use('/api/posts', postsRouter);

app.listen(app.get('port'), function(){
  console.log('Server 🔥🔥🔥ed up on PORT', app.get('port'))
});
