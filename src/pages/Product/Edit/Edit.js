import React from 'react'
// import PropTypes from 'prop-types'

// styles
import './edit.scss'

// Edit.propTypes = {
// }

export default function Edit() {
  return (
    <>
      <h1>Edit Product</h1>
      <p>This is a page where you can edit product details</p>
      <ul>
        <li><input type="text" value="Feature 1" /></li>
        <li><input type="text" value="Feature 2" /></li>
        <li><input type="text" value="Feature 3" /></li>
      </ul>
      <button onClick={() => window.open('/products')}>Confirm</button>

    </>
  )
}