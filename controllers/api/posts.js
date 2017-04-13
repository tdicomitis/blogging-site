const Post    = require ('../../models/post')
const express = require('express');
const Router  = express.Router();
const Comment = require('../../models/comment');

const testUserId = '58efb69ffae20317d7a3388d';

exports.all = (req, res) => {
  Post.find()
  .populate('comments')
  .exec((err, data) => {
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
    if(err){
      res.send(err);
    }else{
      res.json(data);
    }
  })
}

exports.destroy = (req, res) => {
  Post.remove({ _id: req.params.post_id}, (err, post) => {
    if(err){
      res.send(err);
    }else{
      res.json({ message: "SUCCESSFULLY DELETED POST" })
    }
  })
}

exports.modify = (req, res) => {
  Post.findById(req.params.post_id, (err,post) => {
    if(err) {
      res.send(err);
    }else{
      post.content = req.body.content ? req.body.content : post.content;
      post.title = req.body.title ? req.body.title : post.title;

      post.save((err, updatedPost) => {
       if(err){
         console.log(err)
       }else{
         res.json({updatedPost, message: 'Post Updated!'});
       }
     })

    }
  })
}

exports.createComment = (req, res) => {
  var comment = new Comment();
  comment.content = req.body.content;
  comment.author = req.user ? req.user._id : testUserId

  comment.save((err, comment) => {
    Post.findById(req.params.post_id, (err, post) => {
      if(err){
        res.send(err)
      }else{
        post.comments.push(comment._id)
        post.save((err, post) => {
          if(err){
            res.send(err)
          }else{
            res.json(post)
          }
        })
      }
    })
  })

}
