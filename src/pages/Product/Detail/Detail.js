import React from 'react'
// import PropTypes from 'prop-types'

// styles
import './detail.scss'

// Detail.propTypes = {
// }

export default function Detail() {
  return (
    <>
      <button onClick={() => window.open('/products')}>Back</button>
      <h1>Product Detail</h1>
      <p>This is a page where you can show product details</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </>
  )
}