import React, { Component } from 'react';
import {HomeContainer, AboutContainer} from './containers';

class App extends Component {
  render(){
    return(
      <div className="App">
        <HomeContainer />
        <AboutContainer />
      </div>
    );
  }
}

export default App;
