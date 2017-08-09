import React from 'react';

const ShopTile = (props) => {
  const product = props.product

  return(
    <div className="prod-card">
      <h3> { product.prodAdjective } { product.prodName } </h3>
      <h4> { product.prodPrice } </h4>
      <img src={ product.prodImg } />
      <button className="add-to-card-button" onClick={() => props.addItem(product)}>Add to Cart</button>
    </div>
  )

}

export /*the friggin'*/ default ShopTile;
