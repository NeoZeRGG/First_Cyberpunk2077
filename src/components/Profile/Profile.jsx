import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import newStyles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {store} from "../../State/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return (
      <div>
         <ProfileInfo />
         <MyPostsContainer
             store={props.store}
         />
    </div>
  );
}

export default Profile;