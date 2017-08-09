import React from 'react';
import faker from 'faker';
import { Shop } from '../../components';

class ShopContainer extends React.Component {
  state = {
    title: null,
    prodName: null,
    prodPrice: 0,
    prodAdjective: null,
    prodImg: null,
    products: null
  }

  componentDidMount() {
    this.setTitle();
    this.fetchProdDataFromServer();
  }

  setTitle = () => {
    setTimeout(() => {
      this.setState({title:"My Special Shop of Random Crap"})
    }, 1000)
  }

  fetchProdDataFromServer = () => {

    const tempProdArray = [];

    for(let n = 0; n < 25; n += 1){
      tempProdArray.push({
        prodName: faker.commerce.productName(),
        prodPrice: faker.commerce.price(),
        prodAdjective: faker.commerce.productAdjective(),
        prodImg: faker.random.image()
      })
      console.log(tempProdArray)
    }

    setTimeout(() => {
      this.setState({products:tempProdArray})
    }, 3000)
  }

  render() {
    return(
        <div>
          {
            this.state.products
            ? <Shop prodData={ this.state.products } title={ this.state.title } />
            : <h3> Loading Products...</h3>
          }
        </div>
    )
  }
}

export default ShopContainer;
