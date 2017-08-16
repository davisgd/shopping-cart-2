import React from 'react';
import ProfileTile from './ProfileTile';

const styles = {
  container: {
    padding: "150px",
    border: "1px solid red"
  }
}

const Profile = (props) => {
  return(
    <div className="profile-container" style={ styles.container }>
      {
        props.users.map((user) => {
          return(
            <ProfileTile user={ user } />
          )
        })
      }
    </div>
  )
}

export default Profile;
