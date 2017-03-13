var express = require('express');
var Post = require('../models/post');
var Router = new express.Router();

Router.route('/')
  .get(function(req, res){
    res.json({message: "I NEED WINE"})
});

Router.get('/', function(req, res){
 Post.find(function(err, data){
   if(err){
     console.log("Error finding post")
   } else {
     res.json(data)
   }
 })
});

Router.post('/', function(req, res){
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



module.exports = Router;
