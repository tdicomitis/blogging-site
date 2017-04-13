const Post = require ('../../models/post')

exports.all = (req, res) => {
  Post.find((err, data) => {
    if(!data) return res.status(404).send("No Posts Found");
    if(err) return res.status(500).send(err, "ERROR FINDING ALL POSTS");
    res.json(data);
  })
}

exports.create = (req, res) => {
  var newPost = new Post();
  newPost.content = req.body.content;
  newPost.title = req.body.title;
  newPost.save((err, data) => {
   if(err){
    res.send(err);
    }else{
      res.json({data: data, message: 'Post successfully added!'});
    }
  })
}

exports.getOne = (req, res) => {
  Post.findById(req.params.post_id, (err, data) => {
    if(!data) return res.status(404).send("Cannot Find Post With That ID");
    if(err){
      res.status(500).end(err, "ERROR GETTING ONE POST")
    }else{
      res.json(data);
    }
  })
}

exports.destroy = (req, res) => {
  Post.remove({ _id: req.params.post_id}, (err, post) => {
    if(!post) res.status(404).send("No Post With That ID");
    if(err){
      res.status(500).end(err, "Internal Server Error")
    }else{
      res.json({ message: "SUCCESSFULLY DELETED POST" })
    }
  })
}

exports.modify = (req, res) => {
  Post.findById(req.params.post_id, (err,post) => {
    if(!post) res.status(404).send("Cannot Edit With That ID");
    if(err){
      res.status(500).end(err, "Internal Server Error")
    }else{
      post.content = req.body.content ? req.body.content : post.content;
      post.title = req.body.title ? req.body.title : post.title;

      post.save((err, updatedPost) => {
        if(err){
          console.log(err)
        }else{
          res.json(updatedPost);
        }
      })
    }
  })
}
