var express = require('express');
var Post = require('../models/post');
var Router = new express.Router();

Router.route('/')
  .get(function(req, res){
    console.log("FINDING POST ROUTE");
    Post.find(function(err, data){
      if(err){
        res.status(500).send(err, "ERROR FINDING ALL POSTS");
      } else {
        res.json(data)
      }
    })
 })

.post(function(req, res){
   var newPost = new Post();
   newPost.content = req.body.content;
   newPost.title = req.body.title;

 newPost.save(function(err, data){
   if(err){
     console.log(err)
   } else {
     res.json(data);
   }
 })
});

Router.route('/:post_id')
  .get(function(req, res){
    Post.findById(req.params.post_id, function(err, data){
      if(err){
        console.log(err)
      } else {
        res.json(data)
      }
  })
})

.delete(function(req, res){
   Post.remove({ _id: req.params.post_id }, function(err){
     if(err){
       console.log(err)
     }else{
       res.json({ message: "successfully deleted post" })
     }
   })
})

.put(function(req, res){
  Post.findById(req.params.post_id, function(err, post){
    if(err){
      console.log(err)
    } else {
      post.content = req.body.content ? req.body.content : post.content;
      post.title = req.body.title ? req.body.title : post.title;

      post.save(function(err, updatedPost){
       if(err){
         console.log(err)
       } else {
         res.json(updatedPost);
       }
     })
   }
 })
});


module.exports = Router;
