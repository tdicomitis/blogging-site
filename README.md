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

First, we need to create a new directory called `models`. Then, we will create a new file in `models` called `post.js` to store our blueprint for Post.

```js
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  Content: String,
  Title: String,
});

module.export = mongoose.model('Post', PostSchema);
```

Now, in our existing `routes` directory, we will implement our data for CRUD.

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
Once we have this set up, we can begin to implement CRUD. When we are implementing each CRUD component, it is important to test them using `Postman` before moving on to the next.

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

#### Clean Up

To clean up our code, we will refactor:

```js
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
 Post.remove({ _id: req.params.post }, function(err){
   if(err){
     console.log(err)
   }else{
     res.json({ message: "successfully deleted post" })
   }
 })
})

.put(function(req, res){
 Post.findById(req.params.post, function(err, post){
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
```
----
#### Adding a Post Container

Now, we will be adding a `PostContainer`, so that we can post a new blog. First, we start by creating a new file in our directory called `PostContainer.js`. We will set up this container like we have the others (blog, home, about, experience).

Here is what our `PostContainer.js` file will look like:

```js
import React, { Component } from 'react';

class PostContainer extends Component {
  render() {
    return (
      <div className="">
        <div className="head-title-flex">
          <h1>Post a New Blog!</h1>
        </div>
      </div>
    );
  }
}

export default PostContainer;
```
We need to define `PostContainer` and make sure we export it at the bottom of our code.

Once we have done this, we will then render it in our `index.js` file.

### Rendering in index.js
In our index.js page, we already have code from adding our other containers.

```js
ReactDOM.render((
  <Router history={browserHistory}>

    <Route path="/" component={App}>

      <Route path="/home" component={Home}>
      </Route>

      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="experience" component={Experience} />

    </Route>

  </Router>
),document.getElementById('root'));
```
Now, we just need to add the route for our `PostContainer` and make sure we are importing to `index.js`:

```js
<Route path="/post" component={Post} />
```

Import:
```js
import Post from './PostContainer';
```
### Link to Post
I have chosen to add my `PostContainer` inside the `BlogContainer` file. This will make it easily accessible when I want to create a new blog.

To do so, import `Link` on the top of the `BlogContainer` code.

```js
import { Link } from 'react-router';
```

Next, add in the link component in the existing code, in its own `<div> </div>`:

```js
<Link to="/post" activeClassName="active-nav-btn-flex" className="nav-item"> Post a Blog </Link>
```

Now, test it by going to the `BlogContainer` page and seeing if we have a *Post a Blog* link that will then take us to our `PostContainer` page.

----
#### Creating Post Component

```js
var PostContainer = React.createClass({
  getInitialState: function() {
    return {
      content: null,
      title: null,
    }
  },
  updateContent: function(content){
    return this.setState({ content: content });
  },
  updateTitle: function(title){
    return this.setState({ title: title })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var self = this;
    var data = {
      content: this.state.content,
      title: this.state.title,
    };
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: data
    }).done(function(data){
      console.log(data, "SUCCESSFULLY CREATED A POST!!")
    })
  },
  render: function() {
    return (
      <div className="">
        <h1> Post a New Blog! </h1>
        <PostForm updateTitle={this.updateTitle}
          updateContent={this.updateContent}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
});
```
----
#### View All Blogs
Our goal is to create a function that enables the viewers to see all the blog posts. We will get all blogs from the server, store in state and pass down to the blog list.

First: we define the initial state
Second: Create a function to get data from server
Third: Call function upon component mounting (console log data to ensure it works)

In my wireframe, my `BlogContainer` page will be the one that hosts all of my blog posts to view, so I do not need to create a new file.

----
#### Delete a Post
Created a function to be able to delete a blog post.

We will want to create a button for each blog post, that will allow us to delete that specific post. To do this, we will create a button in our `PostCard.js` file:

```js
<button onClick={ () => props.deletePost(props.id)} className="btn btn-alarm">Delete Post</button>
```
Now, in our `PostList.js` we will add a delete function:
```js
return <PostCard content={item.content} title={item.title} id={item._id}
        key={index} deletePost={self.props.deletePost}
      />
```
Lastly, we will put our delete funciton in our `BlogContainer.js`:
```js
deletePost: function(id) {
  var self=this;
  $.ajax({
    url: '/api/posts/' + id,
    method: 'DELETE'
  }).done(function(data){
    console.log(data, "SUCCESS IN DELETING POST!");
    self.loadAllPostsFromServer();
  })
},
```
Then, in the same file, we will 

```js
deletePost={this.deletePost}
```
