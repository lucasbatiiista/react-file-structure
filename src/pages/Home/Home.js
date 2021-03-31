import React from 'react'
// import PropTypes from 'prop-types'

// styles
import './home.scss'

// components
import { Button, Icon } from '../../components/General'

// Home.propTypes = {
// }

export default function Home() {
  return (
    <>
      <Icon />
      <h1>React File Structure</h1>
      <p>This is a living document for React File Structure.</p>
      <button onClick={() => window.open('/products')}>Products List</button><br />
      <p>Visit our repository:</p>
      <Button />
    </>
  )
}