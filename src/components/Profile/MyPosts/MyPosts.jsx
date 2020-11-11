import React from 'react';
import newStyles from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount = {p.likesCount} />);

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