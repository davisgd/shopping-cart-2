import React from 'react';
import {Home} from '../../components';

// container lifecycle - initialize container, go get data, then render HTML

class HomeContainer extends React.Component {
  state = {
    title: undefined
  }

  componentDidMount() {
    this.getTitle
  }

  getTitle = () => {
    setTimeout( () => {
      this.setState({ title: "This is my HomeContainer Title" });
    }, 3000)
  }

  render(){
    return(
      <div>
        {
          this.state.title
          ? <Home title={ this.state.title }/>
          : <h1>No state yet</h1>
        }
      </div>
    )
  }
}

export default HomeContainer;
