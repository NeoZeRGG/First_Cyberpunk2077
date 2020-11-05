import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
    <div className={classes.item}>
      My posts
    </div>
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
    </div>
      <div>
        <Post message='Wake up samurai!' likesCount='0'/>
        <Post message="It's time for city to burn" likesCount='23'/>
      </div>
    </div>
    )
}

export default MyPosts;