import React from 'react';
import { Link } from 'react-router-dom';
import './navBarStyles.css';


// const styles = {
//   active: {
//     backgroundColor: 'red'
//   },
//   inactive: {
//     backgroundColor: 'blue'
//   }
// }

const NavBar = (props) => {
  const isActive = true

  return(
    <div className="navbar">
      <nav>
        <div className="navlinks">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/my-about-page'>About</Link></li>
            <li><Link to='/my-shop-page'>Shop</Link></li>
            <li><Link to='/user-profile'>User Profiles</Link></li>
            <li><Link to='/my-shopping-cart' className="cart-counter"><h3>Items in Cart: { props.cartCount } Total: ${ props.totalCartPrice }</h3></Link></li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
