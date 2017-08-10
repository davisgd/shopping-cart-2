import React from 'react';

const styles = {
  container: {
    padding: "150px"
  }
}

const Profile = (props) => {
  return(
    <div style={styles.container}>
      <h1>{ props.user.firstName } { props.user.lastName }</h1>
      <h3>{ props.user.email }</h3>
      <img src={ props.user.avatar } />
    </div>
  )
}

export default Profile;
