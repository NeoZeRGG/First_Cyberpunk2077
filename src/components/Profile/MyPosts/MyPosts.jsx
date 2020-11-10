import React from 'react';
import newStyles from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

  let posts= [
    {id: 1, message: "Wake up samurai!", likesCount: 54},
    {id: 2, message: "It's time for city to burn", likesCount: 59},
    {id: 3, message: "We could murder someone for good price!", likesCount: 109},
    {id: 4, message: "Empty"},
    {id: 5, message: "Empty"},
  ];

  let postsElements = posts.map(p => <Post message={p.message} likesCount = {p.likesCount} />);

  return (
    <div className={newStyles.postsBlock}>
    <div>
      <h3>My posts</h3>
    </div>
    <div>
      <textarea></textarea>
      <div>
      <button>Add posts</button>
      </div>
      <button>Remove</button>
    </div>
      <div>
        {postsElements}
      </div>
    </div>
    )
}

export default MyPosts;