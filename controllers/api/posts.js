// var Router = new express.Router();

var Post = require ('../../models/post')

exports.all = function(req, res){
  Post.find(function(err, data){
    if(!data) return res.status(404).send("No Posts Found");
    if(err){
      res.status(500).end(err, "ERROR FINDING ALL POSTS");
    }else{
      res.json(data);
    }
  })
}

exports.create = function(req, res){
  var newPost = new Post();
  newPost.content = req.body.content;
  newPost.title = req.body.title;
  newPost.save(function(err, data){
    if(!data) return res.status(404).send("Cannot Create Post");
   if(err){
    res.status(500).end(err, "ERROR SAVING POSTS");
    }else{
      res.json(data);
    }
  })
}

exports.getOne = function(req, res){
  Post.findById(req.params.post_id, function(err, data){
    if(!data) return res.status(404).send("Cannot Find Post With That ID");
    if(err){
      res.status(500).end(err, "ERROR GETTING ONE POST")
    }else{
      res.json(data);
    }
  })
}

exports.destroy = function(req, res){
  Post.remove({ _id: req.params.post_id}, function(err, post){
    if(!post) res.status(404).send("No Post With That ID");
    if(err){
      res.status(500).end(err, "Internal Server Error")
    }else{
      res.json({ message: "SUCCESSFULLY DELETED POST" })
    }
  })
}

exports.modify = function(req, res){
  Post.findById(req.params.post_id, function(err,post){
    if(!post) res.status(404).send("Cannot Edit With That ID");
    if(err){
      res.status(500).end(err, "Internal Server Error")
    }else{
      post.content = req.body.content ? req.body.content : post.content;
      post.title = req.body.title ? req.body.title : post.title;

      post.save(function(err, updatedPost){
        if(err){
          console.log(err)
        }else{
          res.json(updatedPost);
        }
      })
    }
  })
}
