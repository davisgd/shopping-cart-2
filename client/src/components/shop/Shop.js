import React from 'react';
import ShopTile from './ShopTile';

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
              <ShopTile product={ product }
              addItem={ props.addItem } />
            )
          })
        }
      </div>
    </div>
  )
}

export default Shop;
