import React, { Component } from 'react'
import { SubmitProduct } from '../../components'

class SubmitProductContainer extends Component {
  render() {
    return(
      <div>
        <SubmitProduct onChange={ this.props.onChange } />
      </div>
    )
  }
}

export default SubmitProductContainer
