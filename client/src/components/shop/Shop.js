import React from 'react';

const Shop = (props) => {
  return(
    <div>
      <div className="shop-title">
        <h1> { props.title } </h1>
      </div>

      <div className="product-container">
        {
          props.prodData.map((product) => {
            return(
              <div className="prod-card">
                <h3> { product.prodAdjective } { product.prodName } </h3>
                <h4> { product.prodPrice } </h4>
                <img src={ product.prodImg } />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Shop;
