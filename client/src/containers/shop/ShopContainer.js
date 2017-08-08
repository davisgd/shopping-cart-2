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
    console.log(this.state.products);
  }

  setTitle = () => {
    setTimeout(() => {
      this.setState({title: "My Special Shop of Random Crap"})
    }, 1000)
  }

  fetchProdDataFromServer = () => {

    const tempProdArray = [];

    for(let n = 0; n < 20; n += 1){
      tempProdArray.push({
        prodName: faker.commerce.productName(),
        prodPrice: faker.commerce.price(),
        prodAdjective: faker.commerce.productAdjective(),
        prodImg: faker.image.technics()
      })
    }

    setTimeout(() => {
      this.setState({ products: tempProdArray })
    }, 3000)
  }

  render() {
    return(
      <div>
        <div>
          {
            this.state.title
            ? <Shop title={ this.state.title }/>
            : <h1>No Shop state yet</h1>
          }
        </div>

        <div>
          {
            this.state.products
            ? <Shop prodData={ this.state.products }  />
            : <h3> No Shop state yet </h3>
          }
        </div>
      </div>
    )
  }
}

export default ShopContainer;
