import React from 'react'
// import PropTypes from 'prop-types'

// styles
import './list.scss'

// List.propTypes = {
// }

export default function List() {
  return (
    <>
      <button onClick={() => window.open('/')}>Home</button>
      <h1>Product List</h1>
      <p>This is a page where you can see all products</p>
      <ul style={{ color: 'blue', textDecoration: 'underline' }}>
        <li style={{ cursor: 'pointer' }} onClick={() => window.open('/product/product-1')}>Product 1</li>
        <li style={{ cursor: 'pointer' }} onClick={() => window.open('/product/product-2')}>Product 2</li>
        <li style={{ cursor: 'pointer' }} onClick={() => window.open('/product/product-3')}>Product 3</li>
      </ul>
      <button onClick={() => window.open('/product/edit')}>edit</button>
      <button onClick={() => window.open('/product/create')}>create</button>
    </>
  )
}