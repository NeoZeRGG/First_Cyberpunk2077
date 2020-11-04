import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className="item">
      <img src='https://i.imgur.com/QjbdGwR.png'></img>
      New Post
    <div>
      {props.message}<br></br>
      <span>like</span>
      <br></br>
      <span>dislike</span>
    </div>
    </div>
    )
}

export default Post;