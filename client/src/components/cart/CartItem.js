import React from 'react';

const styles = {
  container: {
    backgroundColor: "blue"
  },
  header: {
    fontSize: "30px"
  }
}

const CartItem = (props) => {
  return(
    <div style={styles.container}>
      <h1 style={styles.header}>{props.product.prodName}</h1>
      <img src={props.product.prodImg} />
      <h3>Price: {props.product.prodPrice}</h3>
    </div>
  )
}

export default CartItem;
