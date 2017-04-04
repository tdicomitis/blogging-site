import React from 'react';
import { Link } from 'react-router';

const PostCard = (props) =>
  <div className="">
    <Link to={"/viewablog/" + props.id} > {props.content}</Link>
    <p> {props.title} </p>
    <Link to={"/editpost/" + props.id}className="btn btn-secondary"> Edit Post </Link>
    <button onClick={ () => props.deletePost(props.id)} className="btn btn-alarm">Delete Post</button>
  </div>

export default PostCard;
