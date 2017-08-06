import React from 'react';
import faker from 'faker';
import {Shop} from '../../components';

class ShopContainer extends React.Component {
  state = {
    title: null,
    prodName: null,
    prodPrice: 0,
    prodAdjective: null,
    prodImg: null,
    products: {}
  }

  componentDidMount() {
    this.setTitle();
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

    this.setState({ products: tempProdArray,
      // prodName: tempProdArray.prodName,
      // prodPrice: tempProdArray.prodPrice,
      // prodAdjective: tempProdArray.prodAdjective,
      // prodImg: tempProdArray.prodImg
    })
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
            <Shop
              prodAdjective={ this.state.prodAdjective }
              prodName={ this.state.prodName }
              prodPrice={ this.state.prodPrice }
              prodImg={ this.state.prodImg }
            />
          }
        </div>
      </div>
    )
  }
}

export default ShopContainer;
