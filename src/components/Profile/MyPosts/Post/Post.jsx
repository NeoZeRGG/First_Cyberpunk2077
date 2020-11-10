import React from 'react';
import newStyles from'./Post.module.css';

const Post = (props) => {
  return (
    <div className={newStyles.item}>
      <img src='https://i.imgur.com/QjbdGwR.png'></img>
      New Post
    <div>
      {props.message}<br></br>
      <span>likes</span> {props.likesCount}
    </div>
    </div>
    )
}

export default Post;