import React, { Component } from 'react';
import PostList from './PostList';
import { Link } from 'react-router';

var PostCard = function (props) {
  return (
    <div className="">
      <Link to={"/viewablog/" + props.id} > {props.content}</Link>
      <p> {props.title} </p>
    </div>
  )
};

export default PostCard;
