import React from 'react';
import { Link } from 'react-router';

const PostCard = (props) =>
  <div className="blog-post-style">
    <Link to={"/viewablog/" + props.id} > {props.title}</Link>
    <p> {props.content} </p>
    <Link to={"/editpost/" + props.id}className="btn btn-secondary"> Edit Post </Link>
    <button onClick={ () => props.deletePost(props.id)} className="btn btn-alarm">Delete Post</button>
  </div>

export default PostCard;
