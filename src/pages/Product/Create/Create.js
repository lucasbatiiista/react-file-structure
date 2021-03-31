import React from 'react'
// import PropTypes from 'prop-types'

// styles
import './create.scss'

// Create.propTypes = {
// }

export default function Create() {
  return (
    <>
      <h1>Create product</h1>
      <p>This is a page where you can create a product</p>
      <button onClick={() => window.open('/products')}>Confirm</button>
    </>
  )
}