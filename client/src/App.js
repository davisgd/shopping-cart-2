import React, { Component } from 'react';
import {HomeContainer, AboutContainer, ShopContainer} from './containers';
import {NavBar} from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <div>
            <div>
              <NavBar />
            </div>
            <div>
              <Route exact path='/' component={ HomeContainer } />
              <Route path='/my-about-page' component={ AboutContainer } />
              <Route path='/my-shop-page' component={ ShopContainer } />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
