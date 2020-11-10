import React from 'react';
import newStyles from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img src='https://ixbt.online/gametech/covers/2020/10/25/vL19p9Bue61FjP2tOGsoW5YqErJftArY7jC4LbDQ.jpeg?w=760'></img>
      </div>
    <div className={newStyles.descriptionBlock}>
        ava + description
    </div>
    </div>
  );
}

export default ProfileInfo;