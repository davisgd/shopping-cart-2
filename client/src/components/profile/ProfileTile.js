import React from 'react';
import './ProfileStyles.css';

const ProfileTile = (props) => {
  const user = props.user

  return(
    <div className="profile-card">
      <h1>{ user.firstName } { user.lastName }</h1>
      <h3>{ user.email }</h3>
      <img src={ user.avatar } />
    </div>
  )
}

export default ProfileTile;
