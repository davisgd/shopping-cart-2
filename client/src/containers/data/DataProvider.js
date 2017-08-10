import React from 'react';
import faker from 'faker';
import Layout from '../../Layout';

class DataProvider extends React.Component {
  state = {
    title: null,
    prodName: null,
    prodPrice: 0,
    prodAdjective: null,
    prodImg: null,
    products: null,
    cart: [],
    user: null,
    isDataLoaded: false
  }

  componentDidMount() {
    this.setTitle();
    this.fetchProdDataFromServer();
    this.setUser();
  }

  setTitle = () => {
    setTimeout(() => {
      this.setState({title:"My Special Shop of Random Crap"})
    }, 1000)
  }

  setUser = () => {
    this.setState({ user: this.createUser(), isDataLoaded: true })
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
    }

    setTimeout(() => {
      this.setState({ products: tempProdArray })
    }, 3000)
  }

  addItemToCart = (product) => {
    const tempCart = this.state.cart
    tempCart.push(product)
    this.setState({ cart: tempCart })
    alert(`${product.prodAdjective} ${product.prodName} added to cart!`)
  }

  createUser = () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
    }
    return user;
  }

  render() {
    let totalCartPrice = 0;
    for(let n = 0; n < this.state.cart.length; n += 1){
      totalCartPrice += parseFloat(this.state.cart[n].prodPrice);
    }

    return(
        this.state.products
        ? <Layout
          prodData={ this.state.products }
          title={ this.state.title }
          addItem={ this.addItemToCart }
          cart={ this.state.cart }
          totalCartPrice={ totalCartPrice.toFixed(2) }
          user={ this.state.user }
        />
        : <h3> Loading Products...</h3>
    )
  }
}

export default DataProvider;
