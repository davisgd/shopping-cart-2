import React from 'react'
import './SubmitProductStyles.css'

const formStyle = {
  marginTop: '150px'
}

const SubmitProduct = (props) => {
  return(
    <div style={ formStyle }>
      <form className='submit-product-form'>
        <label>Product Name: </label>
          <input type='text' onChange={ (event) => props.onChange('name', event.target.value) } />
        <label>Product Price: </label>
          <input type='number' onChange={ (event) => props.onChange('price', event.target.value) }/>
        <label>Product Image: </label>
          <input type='text' onChange={ (event) => props.onChange('image URL', event.target.value) }/>
      </form>
    </div>
  )
}

export default SubmitProduct
