import React from 'react';

const Shop = (props) => {
  return(
    <div>
      <div className="shop-title">
        <h1> { props.title } </h1>
      </div>

      <div className="product-container">
        {
          props.products.map((products) => {
            <div className="prod-card">
              <h3> { products.prodAdjective } { products.prodName } </h3>
              <h4> { products.prodPrice } </h4>
              <img src={ products.prodImg } />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Shop;
