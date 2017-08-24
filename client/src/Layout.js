import React, { Component } from 'react';
import { HomeContainer, AboutContainer, DataProvider, SubmitProductContainer } from './containers';
import { NavBar, Cart, Profile } from './components';
import { Route, Switch } from 'react-router-dom';
import Shop from './components/shop/Shop';

class Layout extends Component {
  render() {
    console.log("User has:",this.props.users);
    return(
      <div>
        <NavBar cartCount={ this.props.cart.length } totalCartPrice={ this.props.totalCartPrice } />
        <div>
          <Switch>
            <Route exact path='/' component={ HomeContainer } />
            <Route path='/my-about-page' component={ AboutContainer } />
            <Route path='/my-shop-page' render={() => <Shop prodData={ this.props.prodData } addItem={ this.props.addItem } /> } />
            <Route path='/my-shopping-cart' render={() => <Cart prodData={ this.props.cart } totalCartPrice={ this.props.totalCartPrice } /> } />
            <Route path='/user-profile' render={() => <Profile users={ this.props.users } /> } />
            <Route path='/submit-product' render={() => <SubmitProductContainer onChange={ this.props.onChange } /> } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
