import React from 'react'

// styles
import './component-example.scss'

// components
import { SubComponentExample } from './components'

// packages (global components)
import GlobalComponentExample from './../../packages/global-component-example'

export default function ComponentExample() {
  return (
    <>
      <h2>Component Example</h2>
      <SubComponentExample />
      <GlobalComponentExample />
    </>
  )
}