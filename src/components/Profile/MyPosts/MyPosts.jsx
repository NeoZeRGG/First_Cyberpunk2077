import React from 'react';
import newStyles from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount = {p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch( {type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
  }


  return (
    <div className={newStyles.postsBlock}>
    <div>
      <h3>My posts</h3>
    </div>
    <div>
      <textarea onChange={onPostChange} ref={newPostElement} />
      <div>
      <button onClick={ addPost }>Add posts</button>
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

