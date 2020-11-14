import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import newStyles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {store} from "../../State/state";


const Profile = (props) => {
  return (
      <div>
         <ProfileInfo />
         <MyPosts
             posts={props.profilePage.posts}
             newPostText={props.profilePage.newPostText}
             dispatch={props.dispatch}
         />
    </div>
  );
}

export default Profile;