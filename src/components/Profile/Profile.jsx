import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src='https://ixbt.online/gametech/covers/2020/10/25/vL19p9Bue61FjP2tOGsoW5YqErJftArY7jC4LbDQ.jpeg?w=760'></img>
      </div>
    <div>
        ava + description
    </div>
    <div>
        <MyPosts />
    </div>
    </div>
  );
}

export default Profile;