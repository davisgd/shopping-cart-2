import React from 'react';
import {About} from '../../components';

class AboutContainer extends React.Component {
  state = {
    title: undefined
  }

  componentDidMount() {
    this.setTitle();
  }

  setTitle = () => {
    setTimeout(() => {
      this.setState({title: "About Title"})
    }, 3000)
  }

  render() {
    return(
      <div>
        <About title={ this.state.title } />
      </div>
    )
  }
}

export default AboutContainer;
