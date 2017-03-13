var express = require('express');
var Post = require('../models/post');
var Router = new express.Router();

Router.route('/')
  .get(function(req, res){
   Post.find(function(err, data){
     if(err){
       console.log("Error finding post")
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

// Router.get('/:post_id', function(req, res){
//  Post.findById(req.params.post_id, function(err, data){
//    if(err){
//      console.log(err)
//    } else {
//      res.json(data)
//    }
//   })
// });
//
// Router.delete('/:post', function(req, res){
//  Post.remove({ _id: req.params.post }, function(err){
//    if(err){
//      console.log(err)
//    }else{
//      res.json({ message: "successfully deleted post" })
//    }
//  })
// });
//
// Router.put('/:post', function(req, res){
//  Post.findById(req.params.post, function(err, post){
//    if(err){
//      console.log(err)
//    } else {
//      post.content = req.body.content ? req.body.content : post.content;
//      post.title = req.body.title ? req.body.title : post.title;
//
//      post.save(function(er, updatedPost){
//        if(er){
//          console.log(er)
//        } else {
//          res.json(updatedPost);
//        }
//      })
//    }
//  })
// });


module.exports = Router;
