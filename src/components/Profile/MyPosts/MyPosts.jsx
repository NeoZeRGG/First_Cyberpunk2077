import React from 'react';
import newStyles from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount = {p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }


  return (
    <div className={newStyles.postsBlock}>
    <div>
      <h3>My posts</h3>
    </div>
    <div>
      <textarea onChange={onPostChange} ref={newPostElement} />
      <div>
      <button onClick={ onAddPost }>Add posts</button>
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

