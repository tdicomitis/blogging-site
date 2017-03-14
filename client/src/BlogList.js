import React, { Component } from 'react';
import PostCard from './PostCard';


var BlogList = React.createClass({
  render: function(){
    var self=this;
      var postCards = this.props.posts.map(function(item){
        return <PostCard content={item.content} title={item.title}
              />
      });
      return (
        <div className="">
          { postCards }
        </div>
      )
    }
});

export default BlogList;
