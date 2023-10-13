import React from 'react'
import NavBar from './NavBar'
import Ikigai from './Ikigai'

import '../assest/css/PortfolioContainer.css'


export default function PortfolioContainer() {
  return (
    <div className='port-container'>
        <Ikigai />
        <NavBar />
    </div>
  )
}
