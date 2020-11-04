import React from 'react';
import './MyPosts.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
    <div>
      My posts
    </div>
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
    </div>
      <div>
        <Post message='Wake up samurai!'/>
        <Post message="It's time for city to burn"/>
      </div>
    </div>
    )
}

export default MyPosts;