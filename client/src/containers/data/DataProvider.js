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
    users: [],
    isDataLoaded: false,
    product: {}
  }

  componentDidMount() {
    this.setTitle();
    this.fetchProdDataFromServer();
    this.createUser();
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
    }

    setTimeout(() => {
      this.setState({ products: tempProdArray })
    }, 3000)
  }

  onChange = (type, value) => {
    const newProduct = this.state.product
    newProduct[type] = value
    this.setState({ product: newProduct })
    console.log(this.state.product)
  }

  addItemToCart = (product) => {
    const tempCart = this.state.cart
    tempCart.push(product)
    this.setState({ cart: tempCart })
    alert(`${product.prodAdjective} ${product.prodName} added to cart!`)
  }

  createUser = () => {
    const tempUserArray = this.state.users

    for(let n = 0; n < 25; n += 1){
      tempUserArray.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
      })
    }
    this.setState({users: tempUserArray})
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
          users={ this.state.users }
          onChange={ this.onChange }
        />
        : <h3> Loading Products...</h3>
    )
  }
}

export default DataProvider;
