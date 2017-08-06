import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  active: {
    backgroundColor: 'red'
  },
  inactive: {
    backgroundColor: 'blue'
  }
}

const NavBar = () => {
  const isActive = true

  return(
    <div>
      <nav style={ isActive ? styles.active : styles.inactive }>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/my-about-page'>About</Link></li>
            <li><Link to='/my-shop-page'>Shop</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
