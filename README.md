# Blog Project

In this project, my goal will be to create a basic blog/portfolio website.

---
### Steps

#### Step One: Create Pages

- Landing Page
  - Hero/ Callout Page
  - About Me/ Contact Information
  - My Portfolio
  - Experience
  - Skills
- Create an index.js to redner our html page

#### Step Two: Blog Page
- List of Blog Items
  - View Blog Page
- Create Blog Page (admin only)
- Edit/ Delete Blog Page (admin only)
- CRUD: implementing post, get, put and delete.

---
### CRUD

First, we need to create a new directory called `models`. Then, we will create a new file called `post.js` to store our blueprint for Post.

```js
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  Content: String,
  Title: String,
});

module.export = mongoose.model('Post', PostSchema);
```

Now, in our `routes` directory, we will implement our data for CRUD.

We need to make sure we *export* our PostSchema from `/models/post.js` and then *import* to `/routes/post.js`

Export PostSchema from `/models/post.js`:

```js
module.export = mongoose.model('Post', PostSchema);
```

Import PostSchema into `/routes/post.js`:

```js
var express = require('express');
var Post = require('../models/post');
var Router = new express.Router();
```
Once we have this set up, we can begin to implement CRUD.

#### Get

```js
Router.get('/', function(req, res){
 Post.find(function(err, data){
   if(err){
     console.log("Error finding post")
   } else {
     res.json(data)
   }
 })
});
```

We also need a `get` so we can get a post by the id, so we can edit, delete, etc
```js
Router.get('/:bear_id', function(req, res){
 Bear.findById(req.params.bear_id, function(err, data){
   if(err){
     console.log(err)
   } else {
     res.json(data)
   }
 })
});
```

#### Post

```js
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

```

#### Delete
```js
Router.delete('/:post', function(req, res){
 Post.remove({ _id: req.params.post }, function(err){
   if(err){
     console.log(err)
   }else{
     res.json({ message: "awe, deleted the post😢" })
   }
 })
});
```
#### Put
```js
Router.put('/:post', function(req, res){
 Post.findById(req.params.post, function(err, post){
   if(err){
     console.log(err)
   } else {
     post.content = req.body.content ? req.body.content : post.content;
     post.title = req.body.title ? req.body.title : post.title;

     post.save(function(er, updatedPost){
       if(er){
         console.log(er)
       } else {
         res.json(updatedPost);
       }
     })
   }
 })
});
```
