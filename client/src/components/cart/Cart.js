import React from 'react';
import CartItem from './CartItem';

const styles = {
  container: {
    padding: "150px"
  }
}

const Cart = (props) => {

  console.log("Cart has:", props)

  return(
    <div style={styles.container}>
      {
        props.prodData.length === 0
        ? <h1>Shopping Cart is Empty!</h1>
        :
        props.prodData.map((product, index) => (
          <CartItem product={ product } />
        ))
      }
    </div>
  )
}

export default Cart;
