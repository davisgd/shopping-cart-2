import React from 'react';

const Shop = (props) => {
  return(
    <div>
      <div className="shop-title">
        <h1> { props.title } </h1>
      </div>

      <div className="product-container">
        <h3> { props.prodAdjective } { props.prodName } </h3>
        <h4> { props.prodPrice } </h4>
        <img src={ props.prodImg } />
      </div>
    </div>
  )
}



export default Shop;
