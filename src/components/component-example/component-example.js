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

      <GlobalComponentExample />

      <SubComponentExample />

    </>
  )
}